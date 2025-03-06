import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Requires', [
	[/* class description */
		[/* block */ 'b', ` A dependence upon a module. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this module dependence for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a `],
					[/* inline code block */ 'i', `Requires`],
					[/* text */ 't', ` then this method
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two module dependence objects are equal if
 the module names are equal, set of modifiers are equal, and the
 compiled version of both modules is equal or not recorded for
 both modules. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `Object.equals`],
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
          dependence that is equal to this module dependence`]
			]
		]],
		[/* method */ 'compareTo(java.lang.module.ModuleDescriptor.Requires)', [
			[/* method description */
				[/* text */ 't', `Compares this module dependence to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `Requires`],
					[/* text */ 't', ` objects are compared by comparing their
 module names lexicographically. Where the module names are equal
 then the sets of modifiers are compared in the same way that
 module modifiers are compared (see `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor#compareTo(java.lang.module.ModuleDescriptor)`, `ModuleDescriptor.compareTo`],
					[/* text */ 't', `). Where the module names are equal and
 the set of modifiers are equal then the version of the modules
 recorded at compile-time are compared. When comparing the versions
 recorded at compile-time then a dependence that has a recorded
 version is considered to succeed a dependence that does not have a
 recorded version. If both recorded versions are `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Version#parse(java.lang.String)`, `unparseable`],
					[/* text */ 't', ` then the `],
					[/* reference */ 'r', `#rawCompiledVersion()`, `raw version strings`],
					[/* text */ 't', ` are compared
 lexicographically. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The module dependence to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this module
         dependence is less than, equal to, or greater than the given
         module dependence`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this module dependence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the module name, modifiers, and the
 module version if recorded at compile time. It satisfies the general
 contract of the `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hash-code value for this module dependence`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Return the module name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module name`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this module dependence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing this module dependence`]
			]
		]],
		[/* method */ 'compiledVersion()', [
			[/* method description */
				[/* text */ 't', `Returns the version of the module if recorded at compile-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The version of the module if recorded at compile-time,
         or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if no version was recorded or
         the version string recorded is `],
				[/* reference */ 'r', `java.lang.module.ModuleDescriptor.Version#parse(java.lang.String)`, `unparseable`]
			]
		]],
		[/* method */ 'rawCompiledVersion()', [
			[/* method description */
				[/* text */ 't', `Returns the string with the possibly-unparseable version of the module
 if recorded at compile-time.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string containing the version of the module if recorded
         at compile-time, or an empty `],
				[/* inline code block */ 'i', `Optional`],
				[/* text */ 't', ` if no version
         was recorded`]
			]
		]],
		[/* method */ 'modifiers()', [
			[/* method description */
				[/* text */ 't', `Returns the set of modifiers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of modifiers`]
			]
		]]
	],
]);
