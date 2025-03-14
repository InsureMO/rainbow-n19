import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Exports', [
	[/* class description */
		[/* block */ 'b', ` A package exported by a module, may be qualified or unqualified. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this module export for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not an `],
					[/* inline code block */ 'i', `Exports`],
					[/* text */ 't', ` then this method
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two module exports objects are equal if their
 set of modifiers is equal, the package names are equal and the set
 of target module names is equal. `]
				]],
				[/* text */ 't', `

 `],
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
		[/* method */ 'isQualified()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is a qualified export.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this is a qualified export`]
			]
		]],
		[/* method */ 'compareTo(java.lang.module.ModuleDescriptor.Exports)', [
			[/* method description */
				[/* text */ 't', `Compares this module export to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `Exports`],
					[/* text */ 't', ` objects are compared by comparing the package
 names lexicographically. Where the packages names are equal then the
 sets of modifiers are compared in the same way that module modifiers
 are compared (see `],
					[/* reference */ 'r', `java.lang.module.ModuleDescriptor#compareTo(java.lang.module.ModuleDescriptor)`, `ModuleDescriptor.compareTo`],
					[/* text */ 't', `). Where the package names are equal and
 the set of modifiers are equal then the set of target modules are
 compared. This is done by sorting the names of the target modules
 in ascending order, and according to their natural ordering, and then
 comparing the corresponding elements lexicographically. Where the
 sets differ in size, and the larger set contains all elements of the
 smaller set, then the larger set is considered to succeed the smaller
 set. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The module export to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this module
         export is less than, equal to, or greater than the given
         export dependence`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this module export.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the modifiers, the package name,
 and for a qualified export, the set of modules names to which the
 package is exported. It satisfies the general contract of the
 `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hash-code value for this module export`]
			]
		]],
		[/* method */ 'source()', [
			[/* method description */
				[/* text */ 't', `Returns the package name.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The package name`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing the exported package.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing the exported package`]
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
		]],
		[/* method */ 'targets()', [
			[/* method description */
				[/* text */ 't', `For a qualified export, returns the non-empty and immutable set
 of the module names to which the package is exported. For an
 unqualified export, returns an empty set.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The set of target module names or for an unqualified
         export, an empty set`]
			]
		]]
	],
]);
