import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.regex.MatchResult', [
	[/* class description */
		[/* text */ 't', `The result of a match operation.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This interface contains query methods used to determine the
 results of a match against a regular expression. The match boundaries,
 groups and group boundaries can be seen but not modified through
 a `],
			[/* inline code block */ 'i', `MatchResult`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'end()', [
			[/* method description */
				[/* text */ 't', `Returns the offset after the last character matched.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The offset after the last character matched`]
			]
		]],
		[/* method */ 'end(int)', [
			[/* method description */
				[/* text */ 't', `Returns the offset after the last character of the subsequence
 captured by the given group during this match.

 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `.Pattern#cg`],
					[/* text */ 't', ` are indexed from left
 to right, starting at one.  Group zero denotes the entire pattern, so
 the expression `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end(0)`],
					[/* text */ 't', ` is equivalent to
 `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end()`],
					[/* text */ 't', `.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `The index of a capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given index`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The offset after the last character captured by the group,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the match was successful
          but the group itself did not match anything`]
			]
		]],
		[/* method */ 'groupCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of capturing groups in this match result's pattern.

 `],
				[/* block */ 'b', ` Group zero denotes the entire pattern by convention. It is not
 included in this count.

 `],
				[/* block */ 'b', ` Any non-negative integer smaller than or equal to the value
 returned by this method is guaranteed to be a valid group index for
 this matcher.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The number of capturing groups in this matcher's pattern`]
			]
		]],
		[/* method */ 'start()', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the match.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The index of the first character matched`]
			]
		]],
		[/* method */ 'start(int)', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the subsequence captured by the given group
 during this match.

 `],
				[/* block */ 'b', [
					[/* reference */ 'r', `.Pattern#cg`],
					[/* text */ 't', ` are indexed from left
 to right, starting at one.  Group zero denotes the entire pattern, so
 the expression `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `start(0)`],
					[/* text */ 't', ` is equivalent to
 `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `start()`],
					[/* text */ 't', `.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `The index of a capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given index`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The index of the first character captured by the group,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the match was successful but the group
          itself did not match anything`]
			]
		]],
		[/* method */ 'group()', [
			[/* method description */
				[/* text */ 't', `Returns the input subsequence matched by the previous match.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For a matcher `],
					[/* text */ 't', `m`],
					[/* text */ 't', ` with input sequence `],
					[/* text */ 't', `s`],
					[/* text */ 't', `,
 the expressions `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `group()`],
					[/* text */ 't', ` and
 `],
					[/* text */ 't', `s.`],
					[/* inline code block */ 'i', `substring(`],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `start(),`],
					[/* text */ 't', ` `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end())`],
					[/* text */ 't', `
 are equivalent.  `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that some patterns, for example `],
					[/* inline code block */ 'i', `a*`],
					[/* text */ 't', `, match the empty
 string.  This method will return the empty string when the pattern
 successfully matches the empty string in the input.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The (possibly empty) subsequence matched by the previous match,
         in string form`]
			]
		]],
		[/* method */ 'group(int)', [
			[/* method description */
				[/* text */ 't', `Returns the input subsequence captured by the given group during the
 previous match operation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` For a matcher `],
					[/* text */ 't', `m`],
					[/* text */ 't', `, input sequence `],
					[/* text */ 't', `s`],
					[/* text */ 't', `, and group index
 `],
					[/* text */ 't', `g`],
					[/* text */ 't', `, the expressions `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `group(`],
					[/* text */ 't', `g`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', ` and
 `],
					[/* text */ 't', `s.`],
					[/* inline code block */ 'i', `substring(`],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `start(`],
					[/* text */ 't', `g`],
					[/* inline code block */ 'i', `),`],
					[/* text */ 't', ` `],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end(`],
					[/* text */ 't', `g`],
					[/* inline code block */ 'i', `))`],
					[/* text */ 't', `
 are equivalent.  `]
				]],
				[/* block */ 'b', [
					[/* reference */ 'r', `.Pattern#cg`],
					[/* text */ 't', ` are indexed from left
 to right, starting at one.  Group zero denotes the entire pattern, so
 the expression `],
					[/* inline code block */ 'i', `m.group(0)`],
					[/* text */ 't', ` is equivalent to `],
					[/* inline code block */ 'i', `m.group()`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the match was successful but the group specified failed to match
 any part of the input sequence, then `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned. Note
 that some groups, for example `],
					[/* inline code block */ 'i', `(a*)`],
					[/* text */ 't', `, match the empty string.
 This method will return the empty string when such a group successfully
 matches the empty string in the input.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'group', [/* parameter description */
					[/* text */ 't', `The index of a capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given index`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The (possibly empty) subsequence captured by the group
          during the previous match, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the group
          failed to match part of the input`]
			]
		]]
	],
]);
