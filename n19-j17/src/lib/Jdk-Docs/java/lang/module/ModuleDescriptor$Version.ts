import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.module.ModuleDescriptor$Version', [
	[/* class description */
		[/* text */ 't', `A module's version string.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A version string has three components: The version number itself, an
 optional pre-release version, and an optional build version.  Each
 component is a sequence of tokens; each token is either a non-negative
 integer or a string.  Tokens are separated by the punctuation characters
 `],
			[/* inline code block */ 'i', `'.'`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `'-'`],
			[/* text */ 't', `, or `],
			[/* inline code block */ 'i', `'+'`],
			[/* text */ 't', `, or by transitions from a
 sequence of digits to a sequence of characters that are neither digits
 nor punctuation characters, or vice versa.

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` The `],
				[/* text */ 't', `version number`],
				[/* text */ 't', ` is a sequence of tokens separated by
   `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', ` characters, terminated by the first `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` character. `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The `],
				[/* text */ 't', `pre-release version`],
				[/* text */ 't', ` is a sequence of tokens separated
   by `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', ` characters, terminated by the first
   `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` character. `]
			]],
			[/* block */ 'b', [
				[/* text */ 't', ` The `],
				[/* text */ 't', `build version`],
				[/* text */ 't', ` is a sequence of tokens separated by
   `],
				[/* inline code block */ 'i', `'.'`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `'-'`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `'+'`],
				[/* text */ 't', ` characters.

 `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` When comparing two version strings, the elements of their
 corresponding components are compared in pointwise fashion.  If one
 component is longer than the other, but otherwise equal to it, then the
 first component is considered the greater of the two; otherwise, if two
 corresponding elements are integers then they are compared as such;
 otherwise, at least one of the elements is a string, so the other is
 converted into a string if it is an integer and the two are compared
 lexicographically.  Trailing integer elements with the value zero are
 ignored.

 `],
		[/* block */ 'b', ` Given two version strings, if their version numbers differ then the
 result of comparing them is the result of comparing their version
 numbers; otherwise, if one of them has a pre-release version but the
 other does not then the first is considered to precede the second,
 otherwise the result of comparing them is the result of comparing their
 pre-release versions; otherwise, the result of comparing them is the
 result of comparing their build versions.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Tests this module version for equality with the given object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the given object is not a `],
					[/* inline code block */ 'i', `Version`],
					[/* text */ 't', ` then this method
 returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `. Two module version are equal if their
 corresponding components are equal. `]
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
		[/* method */ 'compareTo(java.lang.module.ModuleDescriptor.Version)', [
			[/* method description */
				[/* text */ 't', `Compares this module version to another module version. Module
 versions are compared as described in the class description.`]
			],
			[/* parameters */
				[/* parameter */ 'that', [/* parameter description */
					[/* text */ 't', `The module version to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer as this
         module version is less than, equal to, or greater than the
         given module version`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hash code for this module version.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The hash code is based upon the components of the version and
 satisfies the general contract of the `],
					[/* reference */ 'r', `java.lang.Object#hashCode()`, `Object.hashCode`],
					[/* text */ 't', ` method. `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hash-code value for this module version`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the string from which this version was parsed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string from which this version was parsed.`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the given string as a version string.`]
			],
			[/* parameters */
				[/* parameter */ 'v', [/* parameter description */
					[/* text */ 't', `The string to parse`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `v`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, an empty string, or cannot be
         parsed as a version string`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The resulting `],
				[/* inline code block */ 'i', `Version`]
			]
		]]
	],
]);
