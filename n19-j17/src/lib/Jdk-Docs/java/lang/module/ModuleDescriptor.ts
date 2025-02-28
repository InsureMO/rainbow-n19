import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor', [
	[/* class description */
		[/* text */ 't', `A module descriptor.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A module descriptor describes a named module and defines methods to
 obtain each of its components. The module descriptor for a named module
 in the Java virtual machine is obtained by invoking the `],
			[/* reference */ 'r', `java.lang.Module`],
			[/* text */ 't', `'s `],
			[/* external link */ 'a', `../Module.html#getDescriptor()`, `getDescriptor`],
			[/* text */ 't', ` method. Module descriptors can also be created using the
 `],
			[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Builder`],
			[/* text */ 't', ` class or by reading the binary form of a
 module declaration (`],
			[/* inline code block */ 'i', `module-info.class`],
			[/* text */ 't', `) using the `],
			[/* reference */ 'r', `read`],
			[/* text */ 't', ` methods defined here. `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A module descriptor describes a `],
			[/* text */ 't', `normal`],
			[/* text */ 't', `, open, or automatic
 module. `],
			[/* text */ 't', `Normal`],
			[/* text */ 't', ` modules and open modules describe their `],
			[/* reference */ 'r', `dependences`],
			[/* text */ 't', `, `],
			[/* reference */ 'r', `exported-packages`],
			[/* text */ 't', `, the services
 that they `],
			[/* reference */ 'r', `use`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `provide`],
			[/* text */ 't', `, and other
 components. `],
			[/* text */ 't', `Normal`],
			[/* text */ 't', ` modules may `],
			[/* reference */ 'r', `open`],
			[/* text */ 't', ` specific
 packages. The module descriptor for an open module does not declare any
 open packages (its `],
			[/* inline code block */ 'i', `opens`],
			[/* text */ 't', ` method returns an empty set) but when
 instantiated in the Java virtual machine then it is treated as if all
 packages are open. The module descriptor for an automatic module does not
 declare any dependences (except for the mandatory dependency on `],
			[/* inline code block */ 'i', `java.base`],
			[/* text */ 't', `), and does not declare any exported or open packages. Automatic
 modules receive special treatment during resolution so that they read all
 other modules in the configuration. When an automatic module is instantiated
 in the Java virtual machine then it reads every unnamed module and is
 treated as if all packages are exported and open. `]
		]],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `ModuleDescriptor`],
			[/* text */ 't', ` objects are immutable and safe for use by
 multiple concurrent threads.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'modifiers()', [
			[/* method description */
				[/* block */ 'b', ` Returns the set of module modifiers. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of modifiers`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* block */ 'b', ` Returns the module name. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module name`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this module descriptor for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a `],
					[/* inline code block */ 'i', `ModuleDescriptor`],
					[/* text */ 't', ` then this
 method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two module descriptors are equal if each
 of their corresponding components is equal. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method satisfies the general contract of the `],
					[/* external link */ 'a', `../Object.html#equals(java.lang.Object)`, `Object.equals`],
					[/* text */ 't', ` method. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'ob', [/* parameter description */
					[/* text */ 't', `the object to which this object is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a module
          descriptor that is equal to this module descriptor`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', ` Returns a string describing the module. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing the module`]
			]
		]],
		[/* method */ 'version()', [
			[/* method description */
				[/* block */ 'b', ` Returns the module version. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This module's version, or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the
         module does not have a version or the version is
         `],
				[/* external link */ 'a', `ModuleDescriptor.Version.html#parse(java.lang.String)`, `unparseable`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this module descriptor.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the components of the module descriptor,
 and satisfies the general contract of the `],
					[/* external link */ 'a', `../Object.html#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hash-code value for this module descriptor`]
			]
		]],
		[/* method */ 'compareTo(java.lang.module.ModuleDescriptor)', [
			[/* method description */
				[/* text */ 't', `Compares this module descriptor to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `ModuleDescriptor`],
					[/* text */ 't', ` objects are compared by comparing their
 module names lexicographically. Where the module names are equal then the
 module versions are compared. When comparing the module versions then a
 module descriptor with a version is considered to succeed a module
 descriptor that does not have a version. If both versions are `],
					[/* external link */ 'a', `ModuleDescriptor.Version.html#parse(java.lang.String)`, `unparseable`],
					[/* text */ 't', ` then the `],
					[/* reference */ 'r', `raw version strings`],
					[/* text */ 't', ` are compared lexicographically. Where the module names
 are equal and the versions are equal (or not present in both), then the
 set of modifiers are compared. Sets of modifiers are compared by comparing
 a `],
					[/* text */ 't', `binary value`],
					[/* text */ 't', ` computed for each set. If a modifier is present
 in the set then the bit at the position of its ordinal is `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `
 in the binary value, otherwise `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `. If the two set of modifiers
 are also equal then the other components of the module descriptors are
 compared in a manner that is consistent with `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', `. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The module descriptor to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this module
         descriptor is less than, equal to, or greater than the given
         module descriptor`]
			]
		]],
		[/* method */ 'packages()', [
			[/* method description */
				[/* text */ 't', `Returns the set of packages in the module.

 `],
				[/* block */ 'b', ` The set of packages includes all exported and open packages, as well
 as the packages of any service providers, and the package for the main
 class. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of the packages in the module`]
			]
		]],
		[/* method */ 'isOpen()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if this is an open module. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is equivalent to testing if the set of `],
					[/* reference */ 'r', `modifiers`],
					[/* text */ 't', ` contains the `],
					[/* external link */ 'a', `ModuleDescriptor.Modifier.html#OPEN`, `OPEN`],
					[/* text */ 't', ` modifier. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is an open module`]
			]
		]],
		[/* method */ 'read(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Reads the binary form of a module declaration from an input stream as a
 module descriptor. This method works exactly as specified by the 2-arg
 `],
				[/* reference */ 'r', `read`],
				[/* text */ 't', ` method with the exception that
 a packager finder is not used to find additional packages when the
 module descriptor read from the stream does not indicate the set of
 packages.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.InvalidModuleDescriptorException', [/* throw description */
					[/* text */ 't', `If an invalid module descriptor is detected`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs reading from the input stream`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'read(java.io.InputStream,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Reads the binary form of a module declaration from an input stream
 as a module descriptor.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the descriptor encoded in the input stream does not indicate a
 set of packages in the module then the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` will be
 invoked. The set of packages that the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` returns
 must include all the packages that the module exports, opens, as well
 as the packages of the service implementations that the module provides,
 and the package of the main class (if the module has a main class). If
 the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` throws an `],
					[/* reference */ 'r', `java.io.UncheckedIOException`],
					[/* text */ 't', ` then
 `],
					[/* reference */ 'r', `java.io.IOException`],
					[/* text */ 't', ` cause will be re-thrown. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If there are bytes following the module descriptor then it is
 implementation specific as to whether those bytes are read, ignored,
 or reported as an `],
					[/* inline code block */ 'i', `InvalidModuleDescriptorException`],
					[/* text */ 't', `. If this
 method fails with an `],
					[/* inline code block */ 'i', `InvalidModuleDescriptorException`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `IOException`],
					[/* text */ 't', ` then it may do so after some, but not all, bytes have
 been read from the input stream. It is strongly recommended that the
 stream be promptly closed and discarded if an exception occurs. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input stream`]
				]],
				[/* parameter */ 'packageFinder', [/* parameter description */
					[/* text */ 't', `A supplier that can produce the set of packages`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.InvalidModuleDescriptorException', [/* throw description */
					[/* text */ 't', `If an invalid module descriptor is detected or the set of
         packages returned by the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` does not include
         all of the packages obtained from the module descriptor`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs reading from the input stream or `],
					[/* inline code block */ 'i', `UncheckedIOException`],
					[/* text */ 't', ` is thrown by the package finder`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Reads the binary form of a module declaration from a byte buffer as a
 module descriptor. This method works exactly as specified by the 2-arg
 `],
				[/* reference */ 'r', `read`],
				[/* text */ 't', ` method with the exception that a
 packager finder is not used to find additional packages when the module
 descriptor encoded in the buffer does not indicate the set of packages.`]
			],
			[/* parameters */
				[/* parameter */ 'bb', [/* parameter description */
					[/* text */ 't', `The byte buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.InvalidModuleDescriptorException', [/* throw description */
					[/* text */ 't', `If an invalid module descriptor is detected`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'read(java.nio.ByteBuffer,java.util.function.Supplier)', [
			[/* method description */
				[/* text */ 't', `Reads the binary form of a module declaration from a byte buffer
 as a module descriptor.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the descriptor encoded in the byte buffer does not indicate a
 set of packages in the module then the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` will be
 invoked. The set of packages that the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` returns
 must include all the packages that the module exports, opens, as well
 as the packages of the service implementations that the module provides,
 and the package of the main class (if the module has a main class). If
 the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` throws an `],
					[/* reference */ 'r', `java.io.UncheckedIOException`],
					[/* text */ 't', ` then
 `],
					[/* reference */ 'r', `java.io.IOException`],
					[/* text */ 't', ` cause will be re-thrown. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The module descriptor is read from the buffer starting at index
 `],
					[/* inline code block */ 'i', `p`],
					[/* text */ 't', `, where `],
					[/* inline code block */ 'i', `p`],
					[/* text */ 't', ` is the buffer's `],
					[/* external link */ 'a', `../../nio/Buffer.html#position()`, `position`],
					[/* text */ 't', ` when this method is invoked. Upon return the buffer's position
 will be equal to `],
					[/* inline code block */ 'i', `p + n`],
					[/* text */ 't', ` where `],
					[/* inline code block */ 'i', `n`],
					[/* text */ 't', ` is the number of bytes
 read from the buffer. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If there are bytes following the module descriptor then it is
 implementation specific as to whether those bytes are read, ignored,
 or reported as an `],
					[/* inline code block */ 'i', `InvalidModuleDescriptorException`],
					[/* text */ 't', `. If this
 method fails with an `],
					[/* inline code block */ 'i', `InvalidModuleDescriptorException`],
					[/* text */ 't', ` then it
 may do so after some, but not all, bytes have been read. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'bb', [/* parameter description */
					[/* text */ 't', `The byte buffer`]
				]],
				[/* parameter */ 'packageFinder', [/* parameter description */
					[/* text */ 't', `A supplier that can produce the set of packages`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.module.InvalidModuleDescriptorException', [/* throw description */
					[/* text */ 't', `If an invalid module descriptor is detected or the set of
         packages returned by the `],
					[/* inline code block */ 'i', `packageFinder`],
					[/* text */ 't', ` does not include
         all of the packages obtained from the module descriptor`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The module descriptor`]
			]
		]],
		[/* method */ 'exports()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns the set of `],
					[/* inline code block */ 'i', `Exports`],
					[/* text */ 't', ` objects representing the exported
 packages. `]
				]],
				[/* block */ 'b', ` If this module is an automatic module then the set of exports
 is empty. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of exported packages`]
			]
		]],
		[/* method */ 'opens()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns the set of `],
					[/* inline code block */ 'i', `Opens`],
					[/* text */ 't', ` objects representing the open
 packages. `]
				]],
				[/* block */ 'b', ` If this module is an open module or an automatic module then the
 set of open packages is empty. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of open packages`]
			]
		]],
		[/* method */ 'isAutomatic()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if this is an automatic module. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is equivalent to testing if the set of `],
					[/* reference */ 'r', `modifiers`],
					[/* text */ 't', ` contains the `],
					[/* external link */ 'a', `ModuleDescriptor.Modifier.html#AUTOMATIC`, `AUTOMATIC`],
					[/* text */ 't', ` modifier. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is an automatic module`]
			]
		]],
		[/* method */ 'uses()', [
			[/* method description */
				[/* block */ 'b', ` Returns the set of service dependences. `],
				[/* block */ 'b', ` If this module is an automatic module then the set of service
 dependences is empty. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of the fully qualified class
          names of the service types used`]
			]
		]],
		[/* method */ 'provides()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns the set of `],
					[/* inline code block */ 'i', `Provides`],
					[/* text */ 't', ` objects representing the
 services that the module provides. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The possibly-empty unmodifiable set of the services that this
         module provides`]
			]
		]],
		[/* method */ 'requires()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', ` Returns the set of `],
					[/* inline code block */ 'i', `Requires`],
					[/* text */ 't', ` objects representing the module
 dependences. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The set includes a dependency on "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `" when this
 module is not named "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `". If this module is an automatic
 module then it does not have a dependency on any module other than
 "`],
					[/* inline code block */ 'i', `java.base`],
					[/* text */ 't', `". `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of `],
				[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Requires`],
				[/* text */ 't', ` objects`]
			]
		]],
		[/* method */ 'mainClass()', [
			[/* method description */
				[/* block */ 'b', ` Returns the module main class. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The fully qualified class name of the module's main class`]
			]
		]],
		[/* method */ 'toNameAndVersion()', [
			[/* method description */
				[/* block */ 'b', ` Returns a string containing the module name and, if present, its
 version. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string containing the module name and, if present, its
         version`]
			]
		]],
		[/* method */ 'rawVersion()', [
			[/* method description */
				[/* block */ 'b', ` Returns the string with the possibly-unparseable version of the
 module. `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string containing the version of the module or an empty
         `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if the module does not have a version`]
			]
		]],
		[/* method */ 'newModule(java.lang.String,java.util.Set)', [
			[/* method description */
				[/* text */ 't', `Instantiates a builder to build a module descriptor.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The module name`]
				]],
				[/* parameter */ 'ms', [/* parameter description */
					[/* text */ 't', `The set of module modifiers`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal module
         name, or the set of modifiers contains `],
					[/* external link */ 'a', `ModuleDescriptor.Modifier.html#AUTOMATIC`, `AUTOMATIC`],
					[/* text */ 't', ` with other modifiers`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new builder`]
			]
		]],
		[/* method */ 'newModule(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Instantiates a builder to build a module descriptor for a `],
				[/* text */ 't', `normal`],
				[/* text */ 't', `
 module. This method is equivalent to invoking `],
				[/* reference */ 'r', `newModule`],
				[/* text */ 't', ` with an empty set of `],
				[/* reference */ 'r', `enum class in java.lang.module.ModuleDescriptor.Modifier`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The module name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal module
         name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new builder`]
			]
		]],
		[/* method */ 'newOpenModule(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Instantiates a builder to build a module descriptor for an open module.
 This method is equivalent to invoking `],
				[/* reference */ 'r', `newModule`],
				[/* text */ 't', ` with the `],
				[/* external link */ 'a', `ModuleDescriptor.Modifier.html#OPEN`, `OPEN`],
				[/* text */ 't', ` modifier.

 `],
				[/* block */ 'b', ` The builder for an open module cannot be used to declare any open
 packages. `]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The module name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal module
         name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new builder that builds an open module`]
			]
		]],
		[/* method */ 'newAutomaticModule(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Instantiates a builder to build a module descriptor for an automatic
 module. This method is equivalent to invoking `],
				[/* reference */ 'r', `newModule`],
				[/* text */ 't', ` with the `],
				[/* external link */ 'a', `ModuleDescriptor.Modifier.html#AUTOMATIC`, `AUTOMATIC`],
				[/* text */ 't', `
 modifier.

 `],
				[/* block */ 'b', ` The builder for an automatic module cannot be used to declare module
 or service dependences. It also cannot be used to declare any exported
 or open packages. `]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The module name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the module name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or is not a legal module
         name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A new builder that builds an automatic module`]
			]
		]]
	],
]);
