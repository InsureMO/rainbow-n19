import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Provides', [
	[/* class description */
		[/* block */ 'b', ` A service that a module provides one or more implementations of. `]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', ` for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a `],
					[/* inline code block */ 'i', `Provides`],
					[/* text */ 't', ` then this method
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two `],
					[/* inline code block */ 'i', `Provides`],
					[/* text */ 't', ` objects are equal if the
 service type is equal and the list of providers is equal. `]
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
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a
          `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', ` that is equal to this `],
				[/* inline code block */ 'i', `Provides`]
			]
		]],
		[/* method */ 'compareTo(java.lang.module.ModuleDescriptor.Provides)', [
			[/* method description */
				[/* text */ 't', `Compares this `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', ` to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `Provides`],
					[/* text */ 't', ` objects are compared by comparing the fully
 qualified class name of the service type lexicographically. Where the
 class names are equal then the list of the provider class names are
 compared by comparing the corresponding elements of both lists
 lexicographically and in sequence. Where the lists differ in size,
 `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', ` is the size of the shorter list, and the first `],
					[/* inline code block */ 'i', `N`],
					[/* text */ 't', `
 corresponding elements are equal, then the longer list is considered
 to succeed the shorter list. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `Provides`],
					[/* text */ 't', ` to compare`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this
         `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', ` is less than, equal to, or greater than
         the given `],
				[/* inline code block */ 'i', `Provides`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the service type and the set of
 providers. It satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method. `]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The hash-code value for this module provides`]
			]
		]],
		[/* method */ 'service()', [
			[/* method description */
				[/* text */ 't', `Returns the fully qualified class name of the service type.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The fully qualified class name of the service type`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this `],
				[/* inline code block */ 'i', `Provides`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A string describing this `],
				[/* inline code block */ 'i', `Provides`]
			]
		]],
		[/* method */ 'providers()', [
			[/* method description */
				[/* text */ 't', `Returns the list of the fully qualified class names of the providers
 or provider factories.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A non-empty and unmodifiable list of the fully qualified class
         names of the providers or provider factories`]
			]
		]]
	],
	/* enum values */ UDF
]);
