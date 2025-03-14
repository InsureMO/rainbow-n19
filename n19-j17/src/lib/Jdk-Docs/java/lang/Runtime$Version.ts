import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Runtime$Version', [
	[/* class description */
		[/* text */ 't', `A representation of a version string for an implementation of the
 Java SE Platform.  A version string consists of a version number
 optionally followed by pre-release and build information.

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `verNum`, `Version numbers`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `version number`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `$VNUM`],
			[/* text */ 't', `, is a non-empty sequence of
 elements separated by period characters (U+002E).  An element is either
 zero, or an unsigned integer numeral without leading zeros.  The final
 element in a version number must not be zero.  When an element is
 incremented, all subsequent elements are removed.  The format is: `]
		]],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` [1-9][0-9]*((\\.0)*\\.[1-9][0-9]*)*
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` The sequence may be of arbitrary length but the first four elements
 are assigned specific meanings, as follows:`],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', ` $FEATURE.$INTERIM.$UPDATE.$PATCH
 `]
		]],
		[/* text */ 't', `

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `FEATURE`, `$FEATURE`],
					[/* text */ 't', ` — The
 feature-release counter, incremented for every feature release
 regardless of release content.  Features may be added in a feature
 release; they may also be removed, if advance notice was given at least
 one feature release ahead of time.  Incompatible changes may be made
 when justified. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `INTERIM`, `$INTERIM`],
					[/* text */ 't', ` — The
 interim-release counter, incremented for non-feature releases that
 contain compatible bug fixes and enhancements but no incompatible
 changes, no feature removals, and no changes to standard APIs.
 `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `UPDATE`, `$UPDATE`],
					[/* text */ 't', ` — The update-release
 counter, incremented for compatible update releases that fix security
 issues, regressions, and bugs in newer features. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `PATCH`, `$PATCH`],
					[/* text */ 't', ` — The emergency
 patch-release counter, incremented only when it's necessary to produce
 an emergency release to fix a critical issue. `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` The fifth and later elements of a version number are free for use by
 platform implementors, to identify implementor-specific patch
 releases. `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` A version number never has trailing zero elements.  If an element
 and all those that follow it logically have the value zero then all of
 them are omitted. `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The sequence of numerals in a version number is compared to another
 such sequence in numerical, pointwise fashion; `],
			[/* text */ 't', `e.g.`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `10.0.4`],
			[/* text */ 't', ` is less than `],
			[/* inline code block */ 'i', `10.1.2`],
			[/* text */ 't', `.  If one sequence is shorter than
 another then the missing elements of the shorter sequence are considered
 to be less than the corresponding elements of the longer sequence;
 `],
			[/* text */ 't', `e.g.`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `10.0.2`],
			[/* text */ 't', ` is less than `],
			[/* inline code block */ 'i', `10.0.2.1`],
			[/* text */ 't', `. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `verStr`, `Version strings`]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `version string`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `$VSTR`],
			[/* text */ 't', `, is a version number `],
			[/* inline code block */ 'i', `$VNUM`],
			[/* text */ 't', `, as described above, optionally followed by pre-release and build
 information, in one of the following formats: `]
		]],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', `     $VNUM(-$PRE)?\\+$BUILD(-$OPT)?
     $VNUM-$PRE(-$OPT)?
     $VNUM(\\+-$OPT)?
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ` where: `],
		[/* text */ 't', `

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `pre`, `$PRE`],
					[/* text */ 't', `, matching `],
					[/* inline code block */ 'i', `([a-zA-Z0-9]+)`],
					[/* text */ 't', `
 — A pre-release identifier.  Typically `],
					[/* inline code block */ 'i', `ea`],
					[/* text */ 't', `, for a
 potentially unstable early-access release under active development, or
 `],
					[/* inline code block */ 'i', `internal`],
					[/* text */ 't', `, for an internal developer build. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `build`, `$BUILD`],
					[/* text */ 't', `, matching `],
					[/* inline code block */ 'i', `(0|[1-9][0-9]*)`],
					[/* text */ 't', ` — The build number, incremented for each promoted
 build.  `],
					[/* inline code block */ 'i', `$BUILD`],
					[/* text */ 't', ` is reset to `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', ` when any portion of `],
					[/* inline code block */ 'i', `$VNUM`],
					[/* text */ 't', ` is incremented. `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* anchor */ 'r', '#-id', `opt`, `$OPT`],
					[/* text */ 't', `, matching `],
					[/* inline code block */ 'i', `([-a-zA-Z0-9.]+)`],
					[/* text */ 't', `
 — Additional build information, if desired.  In the case of an
 `],
					[/* inline code block */ 'i', `internal`],
					[/* text */ 't', ` build this will often contain the date and time of the
 build. `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A version string `],
			[/* inline code block */ 'i', `10-ea`],
			[/* text */ 't', ` matches `],
			[/* inline code block */ 'i', `$VNUM = "10"`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `$PRE = "ea"`],
			[/* text */ 't', `.  The version string `],
			[/* inline code block */ 'i', `10+-ea`],
			[/* text */ 't', ` matches
 `],
			[/* inline code block */ 'i', `$VNUM = "10"`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `$OPT = "ea"`],
			[/* text */ 't', `. `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` When comparing two version strings, the value of `],
			[/* inline code block */ 'i', `$OPT`],
			[/* text */ 't', `, if
 present, may or may not be significant depending on the chosen
 comparison method.  The comparison methods `],
			[/* reference */ 'r', `#compareTo(java.lang.Runtime.Version)`, `compareTo()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#compareToIgnoreOptional(java.lang.Runtime.Version)`, `compareToIgnoreOptional()`],
			[/* text */ 't', ` should be used consistently with the
 corresponding methods `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equals()`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `#equalsIgnoreOptional(java.lang.Object)`, `equalsIgnoreOptional()`],
			[/* text */ 't', `.  `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* text */ 't', `short version string`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `$SVSTR`],
			[/* text */ 't', `, often useful in
 less formal contexts, is a version number optionally followed by a
 pre-release identifier:`]
		]],
		[/* text */ 't', `

 `],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', `     $VNUM(-$PRE)?
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `value-based`],
			[/* text */ 't', `
 class; programmers should treat instances that are
 `],
			[/* reference */ 'r', `#equals(java.lang.Object)`, `equal`],
			[/* text */ 't', ` as interchangeable and should not
 use instances for synchronization, or unpredictable behavior may
 occur. For example, in a future release, synchronization may fail.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines whether this `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` is equal to another object.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `Version`],
					[/* text */ 't', `s are equal if and only if they represent the
 same version string.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to which this `],
					[/* inline code block */ 'i', `Version`],
					[/* text */ 't', ` is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` that is identical to this `],
				[/* inline code block */ 'i', `Version`]
			]
		]],
		[/* method */ 'equalsIgnoreOptional(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Determines whether this `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` is equal to another
 disregarding optional build information.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two `],
					[/* inline code block */ 'i', `Version`],
					[/* text */ 't', `s are equal if and only if they represent the
 same version string disregarding the optional build information.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to which this `],
					[/* inline code block */ 'i', `Version`],
					[/* text */ 't', ` is to be compared`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given object is a `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` that is identical to this `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', `
          ignoring the optional build information`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Runtime.Version)', [
			[/* method description */
				[/* text */ 't', `Compares this version to another.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Each of the components in the `],
					[/* text */ 't', `version`],
					[/* text */ 't', ` is
 compared in the following order of precedence: version numbers,
 pre-release identifiers, build numbers, optional build information.
 `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ` Comparison begins by examining the sequence of version numbers.
 If one sequence is shorter than another, then the missing elements
 of the shorter sequence are considered to be less than the
 corresponding elements of the longer sequence. `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ` A version with a pre-release identifier is always considered to
 be less than a version without one.  Pre-release identifiers are
 compared numerically when they consist only of digits, and
 lexicographically otherwise.  Numeric identifiers are considered to
 be less than non-numeric identifiers.  `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ` A version without a build number is always less than one with a
 build number; otherwise build numbers are compared numerically. `],
				[/* text */ 't', `

 `],
				[/* block */ 'b', ` The optional build information is compared lexicographically.
 During this comparison, a version with optional build information is
 considered to be greater than a version without one. `]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the given object is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this
          `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` is less than, equal to, or greater than the
          given `],
				[/* inline code block */ 'i', `Version`]
			]
		]],
		[/* method */ 'compareToIgnoreOptional(java.lang.Runtime.Version)', [
			[/* method description */
				[/* text */ 't', `Compares this version to another disregarding optional build
 information.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Two versions are compared by examining the version string as
 described in `],
					[/* reference */ 'r', `#compareTo(java.lang.Runtime.Version)`, `compareTo(Version)`],
					[/* text */ 't', ` with the exception that the
 optional build information is always ignored. `]
				]],
				[/* text */ 't', `

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method provides ordering which is consistent with
 `],
					[/* inline code block */ 'i', `equalsIgnoreOptional()`],
					[/* text */ 't', `. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `The object to be compared`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the given object is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A negative integer, zero, or a positive integer if this
          `],
				[/* inline code block */ 'i', `Version`],
				[/* text */ 't', ` is less than, equal to, or greater than the
          given `],
				[/* inline code block */ 'i', `Version`]
			]
		]],
		[/* method */ 'feature()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* text */ 't', `feature`],
				[/* text */ 't', ` element of
 the version number.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the feature element`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code of this version.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The hashcode of this version`]
			]
		]],
		[/* method */ 'interim()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* text */ 't', `interim`],
				[/* text */ 't', ` element of
 the version number, or zero if it is absent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the interim element, or zero`]
			]
		]],
		[/* method */ 'major()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the major element of the version number.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the feature element`]
			]
		]],
		[/* method */ 'minor()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the minor element of the version number, or
 zero if it is absent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the interim element, or zero`]
			]
		]],
		[/* method */ 'patch()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* text */ 't', `patch`],
				[/* text */ 't', ` element of the
 version number, or zero if it is absent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the patch element, or zero`]
			]
		]],
		[/* method */ 'security()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the security element of the version number, or
 zero if it is absent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the update element, or zero`]
			]
		]],
		[/* method */ 'update()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* text */ 't', `update`],
				[/* text */ 't', ` element of the
 version number, or zero if it is absent.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The value of the update element, or zero`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this version.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The version string`]
			]
		]],
		[/* method */ 'version()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable `],
				[/* reference */ 'r', `java.util.List`, `List`],
				[/* text */ 't', ` of the integers
 represented in the `],
				[/* text */ 't', `version number`],
				[/* text */ 't', `.
 The `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` always contains at least one element corresponding to
 the `],
				[/* text */ 't', `feature version number`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An unmodifiable list of the integers
          represented in the version number`]
			]
		]],
		[/* method */ 'build()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* text */ 't', `build number`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The optional build number.`]
			]
		]],
		[/* method */ 'optional()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* text */ 't', `optional`],
				[/* text */ 't', ` additional identifying build
 information.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `Additional build information as a String`]
			]
		]],
		[/* method */ 'pre()', [
			[/* method description */
				[/* text */ 't', `Returns the optional `],
				[/* text */ 't', `pre-release`],
				[/* text */ 't', ` information.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The optional pre-release information as a String`]
			]
		]],
		[/* method */ 'parse(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Parses the given string as a valid
 `],
				[/* text */ 't', `version string`],
				[/* text */ 't', ` containing a
 `],
				[/* text */ 't', `version number`],
				[/* text */ 't', ` followed by pre-release and
 build information.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `A string to interpret as a version`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the given string cannot be interpreted as a valid
          version`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the given string is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.NumberFormatException', [/* throw description */
					[/* text */ 't', `If an element of the version number or the build number
          cannot be represented as an `],
					[/* reference */ 'r', `java.lang.Integer`, `Integer`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The Version of the given string`]
			]
		]]
	],
]);
