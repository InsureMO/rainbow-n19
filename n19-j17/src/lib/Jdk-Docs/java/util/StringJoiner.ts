import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.StringJoiner', [
	[/* class description */
		[/* inline code block */ 'i', `StringJoiner`],
		[/* text */ 't', ` is used to construct a sequence of characters separated
 by a delimiter and optionally starting with a supplied prefix
 and ending with a supplied suffix.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Prior to adding something to the `],
			[/* inline code block */ 'i', `StringJoiner`],
			[/* text */ 't', `, its
 `],
			[/* inline code block */ 'i', `sj.toString()`],
			[/* text */ 't', ` method will, by default, return `],
			[/* inline code block */ 'i', `prefix + suffix`],
			[/* text */ 't', `.
 However, if the `],
			[/* inline code block */ 'i', `setEmptyValue`],
			[/* text */ 't', ` method is called, the `],
			[/* inline code block */ 'i', `emptyValue`],
			[/* text */ 't', `
 supplied will be returned instead. This can be used, for example, when
 creating a string using set notation to indicate an empty set, i.e.
 `],
			[/* inline code block */ 'i', `"{}"`],
			[/* text */ 't', `, where the `],
			[/* inline code block */ 'i', `prefix`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `"{"`],
			[/* text */ 't', `, the
 `],
			[/* inline code block */ 'i', `suffix`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `"}"`],
			[/* text */ 't', ` and nothing has been added to the
 `],
			[/* inline code block */ 'i', `StringJoiner`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.CharSequence)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` with no characters in it, with no
 `],
				[/* inline code block */ 'i', `prefix`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', `, and a copy of the supplied
 `],
				[/* inline code block */ 'i', `delimiter`],
				[/* text */ 't', `.
 If no characters are added to the `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` and methods
 accessing the value of it are invoked, it will not return a
 `],
				[/* inline code block */ 'i', `prefix`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', ` (or properties thereof) in the result,
 unless `],
				[/* inline code block */ 'i', `setEmptyValue`],
				[/* text */ 't', ` has first been called.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used between each
         element added to the `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` value`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `delimiter`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.CharSequence,java.lang.CharSequence,java.lang.CharSequence)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` with no characters in it using copies
 of the supplied `],
				[/* inline code block */ 'i', `prefix`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `delimiter`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', `.
 If no characters are added to the `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` and methods
 accessing the string value of it are invoked, it will return the
 `],
				[/* inline code block */ 'i', `prefix + suffix`],
				[/* text */ 't', ` (or properties thereof) in the result, unless
 `],
				[/* inline code block */ 'i', `setEmptyValue`],
				[/* text */ 't', ` has first been called.`]
			],
			[/* parameters */
				[/* parameter */ 'delimiter', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used between each
         element added to the `],
					[/* inline code block */ 'i', `StringJoiner`]
				]],
				[/* parameter */ 'prefix', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used at the beginning`]
				]],
				[/* parameter */ 'suffix', [/* parameter description */
					[/* text */ 't', `the sequence of characters to be used at the end`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `prefix`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `delimiter`],
					[/* text */ 't', `, or
         `],
					[/* inline code block */ 'i', `suffix`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation
 of this `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', `. Note that if
 no add methods have been called, then the length of the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
 representation (either `],
				[/* inline code block */ 'i', `prefix + suffix`],
				[/* text */ 't', ` or `],
				[/* inline code block */ 'i', `emptyValue`],
				[/* text */ 't', `)
 will be returned. The value should be equivalent to
 `],
				[/* inline code block */ 'i', `toString().length()`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the length of the current value of `],
				[/* inline code block */ 'i', `StringJoiner`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the current value, consisting of the `],
				[/* inline code block */ 'i', `prefix`],
				[/* text */ 't', `, the values
 added so far separated by the `],
				[/* inline code block */ 'i', `delimiter`],
				[/* text */ 't', `, and the `],
				[/* inline code block */ 'i', `suffix`],
				[/* text */ 't', `,
 unless no elements have been added in which case, the
 `],
				[/* inline code block */ 'i', `prefix + suffix`],
				[/* text */ 't', ` or the `],
				[/* inline code block */ 'i', `emptyValue`],
				[/* text */ 't', ` characters are returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the string representation of this `],
				[/* inline code block */ 'i', `StringJoiner`]
			]
		]],
		[/* method */ 'add(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Adds a copy of the given `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` value as the next
 element of the `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` value. If `],
				[/* inline code block */ 'i', `newElement`],
				[/* text */ 't', ` is
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `, then `],
				[/* inline code block */ 'i', `"null"`],
				[/* text */ 't', ` is added.`]
			],
			[/* parameters */
				[/* parameter */ 'newElement', [/* parameter description */
					[/* text */ 't', `The element to add`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a reference to this `],
				[/* inline code block */ 'i', `StringJoiner`]
			]
		]],
		[/* method */ 'merge(java.util.StringJoiner)', [
			[/* method description */
				[/* text */ 't', `Adds the contents of the given `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` without prefix and
 suffix as the next element if it is non-empty. If the given `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` is empty, the call has no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` is empty if `],
					[/* reference */ 'r', `#add(java.lang.CharSequence)`, `add()`],
					[/* text */ 't', `
 has never been called, and if `],
					[/* inline code block */ 'i', `merge()`],
					[/* text */ 't', ` has never been called
 with a non-empty `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` argument.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the other `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` is using a different delimiter,
 then elements from the other `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` are concatenated with
 that delimiter and the result is appended to this `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', `
 as a single element.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` whose contents should be merged
              into this one`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the other `],
					[/* inline code block */ 'i', `StringJoiner`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This `],
				[/* inline code block */ 'i', `StringJoiner`]
			]
		]],
		[/* method */ 'setEmptyValue(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Sets the sequence of characters to be used when determining the string
 representation of this `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` and no elements have been
 added yet, that is, when it is empty.  A copy of the `],
				[/* inline code block */ 'i', `emptyValue`],
				[/* text */ 't', `
 parameter is made for this purpose. Note that once an add method has been
 called, the `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` is no longer considered empty, even if
 the element(s) added correspond to the empty `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'emptyValue', [/* parameter description */
					[/* text */ 't', `the characters to return as the value of an empty
         `],
					[/* inline code block */ 'i', `StringJoiner`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `when the `],
					[/* inline code block */ 'i', `emptyValue`],
					[/* text */ 't', ` parameter is
         `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this `],
				[/* inline code block */ 'i', `StringJoiner`],
				[/* text */ 't', ` itself so the calls may be chained`]
			]
		]]
	],
	/* enum values */ UDF
]);
