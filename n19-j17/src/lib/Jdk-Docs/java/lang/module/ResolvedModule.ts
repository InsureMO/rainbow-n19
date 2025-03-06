import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ResolvedModule', [
	[/* class description */
		[/* text */ 't', `A module in a graph of `],
		[/* text */ 't', `resolved modules`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `ResolvedModule`],
			[/* text */ 't', ` defines the `],
			[/* reference */ 'r', `#configuration()`, `configuration`],
			[/* text */ 't', `
 method to get the configuration that the resolved module is in. It defines
 the `],
			[/* reference */ 'r', `#reference()`, `reference`],
			[/* text */ 't', ` method to get the reference to the
 module's content.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this resolved module for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a `],
					[/* inline code block */ 'i', `ResolvedModule`],
					[/* text */ 't', ` then this
 method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two `],
					[/* inline code block */ 'i', `ResolvedModule`],
					[/* text */ 't', ` objects are
 equal if they are in the same configuration and have equal references
 to the module content. `]
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
          reference that is equal to this module reference`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this resolved module.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the components of the resolved module
 and satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hash-code value for this resolved module`]
			]
		]],
		[/* method */ 'configuration()', [
			[/* method description */
				[/* text */ 't', `Returns the configuration that this resolved module is in.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The configuration that this resolved module is in`]
			]
		]],
		[/* method */ 'reference()', [
			[/* method description */
				[/* text */ 't', `Returns the reference to the module's content.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The reference to the module's content`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the module name.

 This convenience method is the equivalent to invoking:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `reference().descriptor().name()`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The module name`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this resolved module.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A string describing this resolved module`]
			]
		]],
		[/* method */ 'reads()', [
			[/* method description */
				[/* text */ 't', `Returns the set of resolved modules that this resolved module reads.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A possibly-empty unmodifiable set of resolved modules that
         this resolved module reads`]
			]
		]]
	],
]);
