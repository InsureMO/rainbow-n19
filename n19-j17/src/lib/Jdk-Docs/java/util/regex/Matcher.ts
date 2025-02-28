import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.regex.Matcher', [
	[/* class description */
		[/* text */ 't', `An engine that performs match operations on a `],
		[/* reference */ 'r', `java.lang.CharSequence`],
		[/* text */ 't', ` by interpreting a `],
		[/* reference */ 'r', `java.util.regex.Pattern`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A matcher is created from a pattern by invoking the pattern's `],
			[/* external link */ 'a', `Pattern.html#matcher(java.lang.CharSequence)`, `matcher`],
			[/* text */ 't', ` method.  Once created, a matcher can be used to
 perform three different kinds of match operations:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `matches`],
					[/* text */ 't', ` method attempts to match the entire
   input sequence against the pattern.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `lookingAt`],
					[/* text */ 't', ` method attempts to match the
   input sequence, starting at the beginning, against the pattern.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* reference */ 'r', `find`],
					[/* text */ 't', ` method scans the input sequence looking
   for the next subsequence that matches the pattern.  `]
				]]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', ` Each of these methods returns a boolean indicating success or failure.
 More information about a successful match can be obtained by querying the
 state of the matcher.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A matcher finds matches in a subset of its input called the
 `],
			[/* text */ 't', `region`],
			[/* text */ 't', `. By default, the region contains all of the matcher's input.
 The region can be modified via the `],
			[/* reference */ 'r', `region`],
			[/* text */ 't', ` method
 and queried via the `],
			[/* reference */ 'r', `regionStart`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `regionEnd`],
			[/* text */ 't', ` methods. The way that the region boundaries interact
 with some pattern constructs can be changed. See `],
			[/* reference */ 'r', `useAnchoringBounds`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `useTransparentBounds`],
			[/* text */ 't', ` for more details.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class also defines methods for replacing matched subsequences with
 new strings whose contents can, if desired, be computed from the match
 result.  The `],
			[/* reference */ 'r', `appendReplacement`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `appendTail`],
			[/* text */ 't', ` methods can be used in tandem in order to collect
 the result into an existing string buffer or string builder. Alternatively,
 the more convenient `],
			[/* reference */ 'r', `replaceAll`],
			[/* text */ 't', ` method can be used to
 create a string in which every matching subsequence in the input sequence
 is replaced.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The explicit state of a matcher includes the start and end indices of
 the most recent successful match.  It also includes the start and end
 indices of the input subsequence captured by each `],
			[/* external link */ 'a', `Pattern.html#cg`, `capturing group`],
			[/* text */ 't', ` in the pattern as well as a total
 count of such subsequences.  As a convenience, methods are also provided for
 returning these captured subsequences in string form.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The explicit state of a matcher is initially undefined; attempting to
 query any part of it before a successful match will cause an `],
			[/* reference */ 'r', `java.lang.IllegalStateException`],
			[/* text */ 't', ` to be thrown.  The explicit state of a matcher is
 recomputed by every match operation.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The implicit state of a matcher includes the input character sequence as
 well as the `],
			[/* text */ 't', `append position`],
			[/* text */ 't', `, which is initially zero and is updated
 by the `],
			[/* reference */ 'r', `appendReplacement`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A matcher may be reset explicitly by invoking its `],
			[/* reference */ 'r', `reset()`],
			[/* text */ 't', `
 method or, if a new input sequence is desired, its `],
			[/* reference */ 'r', `reset(CharSequence)`],
			[/* text */ 't', ` method.  Resetting a
 matcher discards its explicit state information and sets the append position
 to zero.

 `]
		]],
		[/* block */ 'b', ` Instances of this class are not safe for use by multiple concurrent
 threads. `]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'group(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the input subsequence captured by the given
 `],
				[/* external link */ 'a', `Pattern.html#groupname`, `named-capturing group`],
				[/* text */ 't', ` during the
 previous match operation.

 `],
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
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of a named-capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given name`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The (possibly empty) subsequence captured by the named group
          during the previous match, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the group
          failed to match part of the input`]
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
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end(`],
					[/* text */ 't', `g`],
					[/* inline code block */ 'i', `))`],
					[/* text */ 't', `
 are equivalent.  `]
				]],
				[/* block */ 'b', [
					[/* external link */ 'a', `Pattern.html#cg`, `Capturing groups`],
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
					[/* text */ 't', `&nbsp;`],
					[/* text */ 't', `m.`],
					[/* inline code block */ 'i', `end())`],
					[/* text */ 't', ` are equivalent.  `]
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
		[/* method */ 'toString()', [
			[/* method description */
				[/* block */ 'b', [
					[/* text */ 't', `Returns the string representation of this matcher. The
 string representation of a `],
					[/* inline code block */ 'i', `Matcher`],
					[/* text */ 't', ` contains information
 that may be useful for debugging. The exact format is unspecified.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string representation of this matcher`]
			]
		]],
		[/* method */ 'matches()', [
			[/* method description */
				[/* text */ 't', `Attempts to match the entire region against the pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the match succeeds then more information can be obtained via the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `group`],
					[/* text */ 't', ` methods.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the entire region sequence
          matches this matcher's pattern`]
			]
		]],
		[/* method */ 'replaceFirst(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Replaces the first subsequence of the input sequence that matches the
 pattern with the given replacement string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first resets this matcher.  It then scans the input
 sequence looking for a match of the pattern.  Characters that are not
 part of the match are appended directly to the result string; the match
 is replaced in the result by the replacement string.  The replacement
 string may contain references to captured subsequences as in the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Given the regular expression `],
					[/* inline code block */ 'i', `dog`],
					[/* text */ 't', `, the input
 `],
					[/* inline code block */ 'i', `"zzzdogzzzdogzzz"`],
					[/* text */ 't', `, and the replacement string
 `],
					[/* inline code block */ 'i', `"cat"`],
					[/* text */ 't', `, an invocation of this method on a matcher for that
 expression would yield the string `],
					[/* inline code block */ 'i', `"zzzcatzzzdogzzz"`],
					[/* text */ 't', `.  `]
				]],
				[/* block */ 'b', ` Invoking this method changes this matcher's state.  If the matcher
 is to be used in further matching operations then it should first be
 reset.  `]
			],
			[/* parameters */
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The replacement string`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string constructed by replacing the first matching
          subsequence by the replacement string, substituting captured
          subsequences as needed`]
			]
		]],
		[/* method */ 'replaceFirst(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Replaces the first subsequence of the input sequence that matches the
 pattern with the result of applying the given replacer function to the
 match result of this matcher corresponding to that subsequence.
 Exceptions thrown by the replace function are relayed to the caller.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first resets this matcher.  It then scans the input
 sequence looking for a match of the pattern.  Characters that are not
 part of the match are appended directly to the result string; the match
 is replaced in the result by the applying the replacer function that
 returns a replacement string.  The replacement string may contain
 references to captured subsequences as in the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Given the regular expression `],
					[/* inline code block */ 'i', `dog`],
					[/* text */ 't', `, the input
 `],
					[/* inline code block */ 'i', `"zzzdogzzzdogzzz"`],
					[/* text */ 't', `, and the function
 `],
					[/* inline code block */ 'i', `mr -> mr.group().toUpperCase()`],
					[/* text */ 't', `, an invocation of this method on
 a matcher for that expression would yield the string
 `],
					[/* inline code block */ 'i', `"zzzDOGzzzdogzzz"`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Invoking this method changes this matcher's state.  If the matcher
 is to be used in further matching operations then it should first be
 reset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The replacer function should not modify this matcher's state during
 replacement.  This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if such modification is
 detected.

 `]
				]],
				[/* block */ 'b', ` The state of the match result passed to the replacer function is
 guaranteed to be constant only for the duration of the replacer function
 call and only if the replacer function does not modify this matcher's
 state.`]
			],
			[/* parameters */
				[/* parameter */ 'replacer', [/* parameter description */
					[/* text */ 't', `The function to be applied to the match result of this matcher
         that returns a replacement string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the replacer function is null`]
				]],
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected, on a
         best-effort basis, that the replacer function modified this
         matcher's state`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The string constructed by replacing the first matching
          subsequence with the result of applying the replacer function to
          the matched subsequence, substituting captured subsequences as
          needed.`]
			]
		]],
		[/* method */ 'replaceAll(java.util.function.Function)', [
			[/* method description */
				[/* text */ 't', `Replaces every subsequence of the input sequence that matches the
 pattern with the result of applying the given replacer function to the
 match result of this matcher corresponding to that subsequence.
 Exceptions thrown by the function are relayed to the caller.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first resets this matcher.  It then scans the input
 sequence looking for matches of the pattern.  Characters that are not
 part of any match are appended directly to the result string; each match
 is replaced in the result by the applying the replacer function that
 returns a replacement string.  Each replacement string may contain
 references to captured subsequences as in the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 a replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Given the regular expression `],
					[/* inline code block */ 'i', `dog`],
					[/* text */ 't', `, the input
 `],
					[/* inline code block */ 'i', `"zzzdogzzzdogzzz"`],
					[/* text */ 't', `, and the function
 `],
					[/* inline code block */ 'i', `mr -> mr.group().toUpperCase()`],
					[/* text */ 't', `, an invocation of this method on
 a matcher for that expression would yield the string
 `],
					[/* inline code block */ 'i', `"zzzDOGzzzDOGzzz"`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Invoking this method changes this matcher's state.  If the matcher
 is to be used in further matching operations then it should first be
 reset.  `],
				[/* block */ 'b', [
					[/* text */ 't', ` The replacer function should not modify this matcher's state during
 replacement.  This method will, on a best-effort basis, throw a
 `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if such modification is
 detected.

 `]
				]],
				[/* block */ 'b', ` The state of each match result passed to the replacer function is
 guaranteed to be constant only for the duration of the replacer function
 call and only if the replacer function does not modify this matcher's
 state.`]
			],
			[/* parameters */
				[/* parameter */ 'replacer', [/* parameter description */
					[/* text */ 't', `The function to be applied to the match result of this matcher
         that returns a replacement string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the replacer function is null`]
				]],
				[/* throw */ 'java.util.ConcurrentModificationException', [/* throw description */
					[/* text */ 't', `if it is detected, on a
         best-effort basis, that the replacer function modified this
         matcher's state`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The string constructed by replacing each matching subsequence
          with the result of applying the replacer function to that
          matched subsequence, substituting captured subsequences as
          needed.`]
			]
		]],
		[/* method */ 'replaceAll(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Replaces every subsequence of the input sequence that matches the
 pattern with the given replacement string.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method first resets this matcher.  It then scans the input
 sequence looking for matches of the pattern.  Characters that are not
 part of any match are appended directly to the result string; each match
 is replaced in the result by the replacement string.  The replacement
 string may contain references to captured subsequences as in the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Given the regular expression `],
					[/* inline code block */ 'i', `a*b`],
					[/* text */ 't', `, the input
 `],
					[/* inline code block */ 'i', `"aabfooaabfooabfoob"`],
					[/* text */ 't', `, and the replacement string
 `],
					[/* inline code block */ 'i', `"-"`],
					[/* text */ 't', `, an invocation of this method on a matcher for that
 expression would yield the string `],
					[/* inline code block */ 'i', `"-foo-foo-foo-"`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` Invoking this method changes this matcher's state.  If the matcher
 is to be used in further matching operations then it should first be
 reset.  `]
			],
			[/* parameters */
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The replacement string`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The string constructed by replacing each matching subsequence
          by the replacement string, substituting captured subsequences
          as needed`]
			]
		]],
		[/* method */ 'start(int)', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the subsequence captured by the given group
 during the previous match operation.

 `],
				[/* block */ 'b', [
					[/* external link */ 'a', `Pattern.html#cg`, `Capturing groups`],
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
		[/* method */ 'start()', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the previous match.`]
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
		[/* method */ 'start(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the subsequence captured by the given
 `],
				[/* external link */ 'a', `Pattern.html#groupname`, `named-capturing group`],
				[/* text */ 't', ` during the
 previous match operation.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of a named-capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given name`]
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
		[/* method */ 'end(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the offset after the last character of the subsequence
 captured by the given `],
				[/* external link */ 'a', `Pattern.html#groupname`, `named-capturing group`],
				[/* text */ 't', ` during the previous match operation.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of a named-capturing group in this matcher's pattern`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If there is no capturing group in the pattern
          with the given name`]
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
		[/* method */ 'end(int)', [
			[/* method description */
				[/* text */ 't', `Returns the offset after the last character of the subsequence
 captured by the given group during the previous match operation.

 `],
				[/* block */ 'b', [
					[/* external link */ 'a', `Pattern.html#cg`, `Capturing groups`],
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
		[/* method */ 'find()', [
			[/* method description */
				[/* text */ 't', `Attempts to find the next subsequence of the input sequence that matches
 the pattern.

 `],
				[/* block */ 'b', ` This method starts at the beginning of this matcher's region, or, if
 a previous invocation of the method was successful and the matcher has
 not since been reset, at the first character not matched by the previous
 match.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the match succeeds then more information can be obtained via the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `group`],
					[/* text */ 't', ` methods.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, a subsequence of the input
          sequence matches this matcher's pattern`]
			]
		]],
		[/* method */ 'find(int)', [
			[/* method description */
				[/* text */ 't', `Resets this matcher and then attempts to find the next subsequence of
 the input sequence that matches the pattern, starting at the specified
 index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the match succeeds then more information can be obtained via the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `group`],
					[/* text */ 't', ` methods, and subsequent
 invocations of the `],
					[/* reference */ 'r', `find()`],
					[/* text */ 't', ` method will start at the first
 character not matched by this match.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the index to start searching for a match`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If start is less than zero or if start is greater than the
          length of the input sequence.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, a subsequence of the input
          sequence starting at the given index matches this matcher's
          pattern`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this matcher.

 `],
				[/* block */ 'b', ` Resetting a matcher discards all of its explicit state information
 and sets its append position to zero. The matcher's region is set to the
 default region, which is its entire character sequence. The anchoring
 and transparency of this matcher's region boundaries are unaffected.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This matcher`]
			]
		]],
		[/* method */ 'reset(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Resets this matcher with a new input sequence.

 `],
				[/* block */ 'b', ` Resetting a matcher discards all of its explicit state information
 and sets its append position to zero.  The matcher's region is set to
 the default region, which is its entire character sequence.  The
 anchoring and transparency of this matcher's region boundaries are
 unaffected.`]
			],
			[/* parameters */
				[/* parameter */ 'input', [/* parameter description */
					[/* text */ 't', `The new input character sequence`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This matcher`]
			]
		]],
		[/* method */ 'region(int,int)', [
			[/* method description */
				[/* text */ 't', `Sets the limits of this matcher's region. The region is the part of the
 input sequence that will be searched to find a match. Invoking this
 method resets the matcher, and then sets the region to start at the
 index specified by the `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` parameter and end at the
 index specified by the `],
				[/* inline code block */ 'i', `end`],
				[/* text */ 't', ` parameter.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Depending on the transparency and anchoring being used (see
 `],
					[/* reference */ 'r', `useTransparentBounds`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `useAnchoringBounds`],
					[/* text */ 't', `), certain
 constructs such as anchors may behave differently at or around the
 boundaries of the region.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index to start searching at (inclusive)`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index to end searching at (exclusive)`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If start or end is less than zero, if
          start is greater than the length of the input sequence, if
          end is greater than the length of the input sequence, or if
          start is greater than end.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `this matcher`]
			]
		]],
		[/* method */ 'pattern()', [
			[/* method description */
				[/* text */ 't', `Returns the pattern that is interpreted by this matcher.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The pattern for which this matcher was created`]
			]
		]],
		[/* method */ 'appendReplacement(java.lang.StringBuffer,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Implements a non-terminal append-and-replace step.

 `],
				[/* block */ 'b', ` This method performs the following actions: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` It reads characters from the input sequence, starting at the
   append position, and appends them to the given string buffer.  It
   stops after reading the last character preceding the previous match,
   that is, the character at index `],
							[/* reference */ 'r', `start()`],
							[/* text */ 't', `&nbsp;`],
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `&nbsp;`],
							[/* inline code block */ 'i', `1`],
							[/* text */ 't', `.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` It appends the given replacement string to the string buffer.
   `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` It sets the append position of this matcher to the index of
   the last character matched, plus one, that is, to `],
							[/* reference */ 'r', `end()`],
							[/* text */ 't', `.
   `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The replacement string may contain references to subsequences
 captured during the previous match: Each occurrence of
 `],
					[/* inline code block */ 'i', `\${`],
					[/* text */ 't', `name`],
					[/* inline code block */ 'i', `}`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `g`],
					[/* text */ 't', `
 will be replaced by the result of evaluating the corresponding
 `],
					[/* reference */ 'r', `group(name)`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `group(g)`],
					[/* text */ 't', `
 respectively. For `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `g`],
					[/* text */ 't', `,
 the first number after the `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', ` is always treated as part of
 the group reference. Subsequent numbers are incorporated into g if
 they would form a legal group reference. Only the numerals '0'
 through '9' are considered as potential components of the group
 reference. If the second group matched the string `],
					[/* inline code block */ 'i', `"foo"`],
					[/* text */ 't', `, for
 example, then passing the replacement string `],
					[/* inline code block */ 'i', `"$2bar"`],
					[/* text */ 't', ` would
 cause `],
					[/* inline code block */ 'i', `"foobar"`],
					[/* text */ 't', ` to be appended to the string buffer. A dollar
 sign (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) may be included as a literal in the replacement
 string by preceding it with a backslash (`],
					[/* inline code block */ 'i', `\\$`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is intended to be used in a loop together with the
 `],
					[/* reference */ 'r', `appendTail`],
					[/* text */ 't', ` and `],
					[/* reference */ 'r', `find`],
					[/* text */ 't', `
 methods.  The following code, for example, writes `],
					[/* inline code block */ 'i', `one dog two dogs in the yard`],
					[/* text */ 't', ` to the standard-output stream: `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Pattern p = Pattern.compile("cat");
 Matcher m = p.matcher("one cat two cats in the yard");
 StringBuffer sb = new StringBuffer();
 while (m.find()) {
     m.appendReplacement(sb, "dog");
 }
 m.appendTail(sb);
 System.out.println(sb.toString());`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `The target string buffer`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The replacement string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the replacement string refers to a named-capturing
          group that does not exist in the pattern`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the replacement string refers to a capturing group
          that does not exist in the pattern`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This matcher`]
			]
		]],
		[/* method */ 'appendReplacement(java.lang.StringBuilder,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Implements a non-terminal append-and-replace step.

 `],
				[/* block */ 'b', ` This method performs the following actions: `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` It reads characters from the input sequence, starting at the
   append position, and appends them to the given string builder.  It
   stops after reading the last character preceding the previous match,
   that is, the character at index `],
							[/* reference */ 'r', `start()`],
							[/* text */ 't', `&nbsp;`],
							[/* inline code block */ 'i', `-`],
							[/* text */ 't', `&nbsp;`],
							[/* inline code block */ 'i', `1`],
							[/* text */ 't', `.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', ` It appends the given replacement string to the string builder.
   `]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` It sets the append position of this matcher to the index of
   the last character matched, plus one, that is, to `],
							[/* reference */ 'r', `end()`],
							[/* text */ 't', `.
   `]
						]]
					]]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The replacement string may contain references to subsequences
 captured during the previous match: Each occurrence of
 `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `g`],
					[/* text */ 't', ` will be replaced by the result of
 evaluating `],
					[/* reference */ 'r', `group`],
					[/* inline code block */ 'i', `(`],
					[/* text */ 't', `g`],
					[/* inline code block */ 'i', `)`],
					[/* text */ 't', `.
 The first number after the `],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', ` is always treated as part of
 the group reference. Subsequent numbers are incorporated into g if
 they would form a legal group reference. Only the numerals '0'
 through '9' are considered as potential components of the group
 reference. If the second group matched the string `],
					[/* inline code block */ 'i', `"foo"`],
					[/* text */ 't', `, for
 example, then passing the replacement string `],
					[/* inline code block */ 'i', `"$2bar"`],
					[/* text */ 't', ` would
 cause `],
					[/* inline code block */ 'i', `"foobar"`],
					[/* text */ 't', ` to be appended to the string builder. A dollar
 sign (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) may be included as a literal in the replacement
 string by preceding it with a backslash (`],
					[/* inline code block */ 'i', `\\$`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` Note that backslashes (`],
					[/* inline code block */ 'i', `\\`],
					[/* text */ 't', `) and dollar signs (`],
					[/* inline code block */ 'i', `$`],
					[/* text */ 't', `) in
 the replacement string may cause the results to be different than if it
 were being treated as a literal replacement string. Dollar signs may be
 treated as references to captured subsequences as described above, and
 backslashes are used to escape literal characters in the replacement
 string.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method is intended to be used in a loop together with the
 `],
					[/* reference */ 'r', `appendTail`],
					[/* text */ 't', ` and
 `],
					[/* reference */ 'r', `find`],
					[/* text */ 't', ` methods. The following code, for example, writes
 `],
					[/* inline code block */ 'i', `one dog two dogs in the yard`],
					[/* text */ 't', ` to the standard-output stream: `]
				]],
				[/* block */ 'b', [
					[/* code block */ 'c', ` Pattern p = Pattern.compile("cat");
 Matcher m = p.matcher("one cat two cats in the yard");
 StringBuilder sb = new StringBuilder();
 while (m.find()) {
     m.appendReplacement(sb, "dog");
 }
 m.appendTail(sb);
 System.out.println(sb.toString());`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `The target string builder`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The replacement string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If no match has yet been attempted,
          or if the previous match operation failed`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the replacement string refers to a named-capturing
          group that does not exist in the pattern`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If the replacement string refers to a capturing group
          that does not exist in the pattern`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This matcher`]
			]
		]],
		[/* method */ 'appendTail(java.lang.StringBuffer)', [
			[/* method description */
				[/* text */ 't', `Implements a terminal append-and-replace step.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method reads characters from the input sequence, starting at
 the append position, and appends them to the given string buffer.  It is
 intended to be invoked after one or more invocations of the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method in
 order to copy the remainder of the input sequence.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `The target string buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The target string buffer`]
			]
		]],
		[/* method */ 'appendTail(java.lang.StringBuilder)', [
			[/* method description */
				[/* text */ 't', `Implements a terminal append-and-replace step.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method reads characters from the input sequence, starting at
 the append position, and appends them to the given string builder.  It is
 intended to be invoked after one or more invocations of the `],
					[/* reference */ 'r', `appendReplacement`],
					[/* text */ 't', ` method in order to copy the remainder of the input
 sequence.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `The target string builder`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The target string builder`]
			]
		]],
		[/* method */ 'hitEnd()', [
			[/* method description */
				[/* block */ 'b', `Returns true if the end of input was hit by the search engine in
 the last match operation performed by this matcher.

 `],
				[/* block */ 'b', `When this method returns true, then it is possible that more input
 would have changed the result of the last search.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true iff the end of input was hit in the last match; false
          otherwise`]
			]
		]],
		[/* method */ 'groupCount()', [
			[/* method description */
				[/* text */ 't', `Returns the number of capturing groups in this matcher's pattern.

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
		[/* method */ 'requireEnd()', [
			[/* method description */
				[/* block */ 'b', `Returns true if more input could change a positive match into a
 negative one.

 `],
				[/* block */ 'b', `If this method returns true, and a match was found, then more
 input could cause the match to be lost. If this method returns false
 and a match was found, then more input might change the match but the
 match won't be lost. If a match was not found, then requireEnd has no
 meaning.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true iff more input could change a positive match into a
          negative one.`]
			]
		]],
		[/* method */ 'toMatchResult()', [
			[/* method description */
				[/* text */ 't', `Returns the match state of this matcher as a `],
				[/* reference */ 'r', `java.util.regex.MatchResult`],
				[/* text */ 't', `.
 The result is unaffected by subsequent operations performed upon this
 matcher.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `MatchResult`],
				[/* text */ 't', ` with the state of this matcher`]
			]
		]],
		[/* method */ 'regionStart()', [
			[/* method description */
				[/* text */ 't', `Reports the start index of this matcher's region. The
 searches this matcher conducts are limited to finding matches
 within `],
				[/* reference */ 'r', `regionStart`],
				[/* text */ 't', ` (inclusive) and
 `],
				[/* reference */ 'r', `regionEnd`],
				[/* text */ 't', ` (exclusive).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The starting point of this matcher's region`]
			]
		]],
		[/* method */ 'regionEnd()', [
			[/* method description */
				[/* text */ 't', `Reports the end index (exclusive) of this matcher's region.
 The searches this matcher conducts are limited to finding matches
 within `],
				[/* reference */ 'r', `regionStart`],
				[/* text */ 't', ` (inclusive) and
 `],
				[/* reference */ 'r', `regionEnd`],
				[/* text */ 't', ` (exclusive).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ending point of this matcher's region`]
			]
		]],
		[/* method */ 'usePattern(java.util.regex.Pattern)', [
			[/* method description */
				[/* text */ 't', `Changes the `],
				[/* inline code block */ 'i', `Pattern`],
				[/* text */ 't', ` that this `],
				[/* inline code block */ 'i', `Matcher`],
				[/* text */ 't', ` uses to
 find matches with.

 `],
				[/* block */ 'b', ` This method causes this matcher to lose information
 about the groups of the last match that occurred. The
 matcher's position in the input is maintained and its
 last append position is unaffected.`]
			],
			[/* parameters */
				[/* parameter */ 'newPattern', [/* parameter description */
					[/* text */ 't', `The new pattern used by this matcher`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If newPattern is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This matcher`]
			]
		]],
		[/* method */ 'lookingAt()', [
			[/* method description */
				[/* text */ 't', `Attempts to match the input sequence, starting at the beginning of the
 region, against the pattern.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Like the `],
					[/* reference */ 'r', `matches`],
					[/* text */ 't', ` method, this method always starts
 at the beginning of the region; unlike that method, it does not
 require that the entire region be matched.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the match succeeds then more information can be obtained via the
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, and `],
					[/* inline code block */ 'i', `group`],
					[/* text */ 't', ` methods.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, a prefix of the input
          sequence matches this matcher's pattern`]
			]
		]],
		[/* method */ 'quoteReplacement(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a literal replacement `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` for the specified
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.

 This method produces a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that will work
 as a literal replacement `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` in the
 `],
				[/* inline code block */ 'i', `appendReplacement`],
				[/* text */ 't', ` method of the `],
				[/* reference */ 'r', `java.util.regex.Matcher`],
				[/* text */ 't', ` class.
 The `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` produced will match the sequence of characters
 in `],
				[/* inline code block */ 'i', `s`],
				[/* text */ 't', ` treated as a literal sequence. Slashes ('\\') and
 dollar signs ('$') will be given no special meaning.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `The string to be literalized`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A literal string replacement`]
			]
		]],
		[/* method */ 'results()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of match results for each subsequence of the input
 sequence that matches the pattern.  The match results occur in the
 same order as the matching subsequences in the input sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Each match result is produced as if by `],
					[/* reference */ 'r', `toMatchResult()`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` This method does not reset this matcher.  Matching starts on
 initiation of the terminal stream operation either at the beginning of
 this matcher's region, or, if the matcher has not since been reset, at
 the first character not matched by a previous match.

 `],
				[/* block */ 'b', ` If the matcher is to be used for further matching operations after
 the terminal stream operation completes then it should be first reset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This matcher's state should not be modified during execution of the
 returned stream's pipeline.  The returned stream's source
 `],
					[/* inline code block */ 'i', `Spliterator`],
					[/* text */ 't', ` is `],
					[/* text */ 't', `fail-fast`],
					[/* text */ 't', ` and will, on a best-effort
 basis, throw a `],
					[/* reference */ 'r', `java.util.ConcurrentModificationException`],
					[/* text */ 't', ` if such
 modification is detected.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a sequential stream of match results.`]
			]
		]],
		[/* method */ 'hasTransparentBounds()', [
			[/* method description */
				[/* text */ 't', `Queries the transparency of region bounds for this matcher.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if this matcher uses
 `],
					[/* text */ 't', `transparent`],
					[/* text */ 't', ` bounds, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if it uses `],
					[/* text */ 't', `opaque`],
					[/* text */ 't', `
 bounds.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` See `],
					[/* reference */ 'r', `useTransparentBounds`],
					[/* text */ 't', ` for a
 description of transparent and opaque bounds.

 `]
				]],
				[/* block */ 'b', ` By default, a matcher uses opaque region boundaries.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` iff this matcher is using transparent bounds,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'useTransparentBounds(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the transparency of region bounds for this matcher.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking this method with an argument of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` will set this
 matcher to use `],
					[/* text */ 't', `transparent`],
					[/* text */ 't', ` bounds. If the boolean
 argument is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then `],
					[/* text */ 't', `opaque`],
					[/* text */ 't', ` bounds will be used.

 `]
				]],
				[/* block */ 'b', ` Using transparent bounds, the boundaries of this
 matcher's region are transparent to lookahead, lookbehind,
 and boundary matching constructs. Those constructs can see beyond the
 boundaries of the region to see if a match is appropriate.

 `],
				[/* block */ 'b', ` Using opaque bounds, the boundaries of this matcher's
 region are opaque to lookahead, lookbehind, and boundary matching
 constructs that may try to see beyond them. Those constructs cannot
 look past the boundaries so they will fail to match anything outside
 of the region.

 `],
				[/* block */ 'b', ` By default, a matcher uses opaque bounds.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a boolean indicating whether to use opaque or transparent
         regions`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this matcher`]
			]
		]],
		[/* method */ 'hasAnchoringBounds()', [
			[/* method description */
				[/* text */ 't', `Queries the anchoring of region bounds for this matcher.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if this matcher uses
 `],
					[/* text */ 't', `anchoring`],
					[/* text */ 't', ` bounds, `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` otherwise.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` See `],
					[/* reference */ 'r', `useAnchoringBounds`],
					[/* text */ 't', ` for a
 description of anchoring bounds.

 `]
				]],
				[/* block */ 'b', ` By default, a matcher uses anchoring region boundaries.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` iff this matcher is using anchoring bounds,
         `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'useAnchoringBounds(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the anchoring of region bounds for this matcher.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Invoking this method with an argument of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` will set this
 matcher to use `],
					[/* text */ 't', `anchoring`],
					[/* text */ 't', ` bounds. If the boolean
 argument is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `, then `],
					[/* text */ 't', `non-anchoring`],
					[/* text */ 't', ` bounds will be
 used.

 `]
				]],
				[/* block */ 'b', ` Using anchoring bounds, the boundaries of this
 matcher's region match anchors such as ^ and $.

 `],
				[/* block */ 'b', ` Without anchoring bounds, the boundaries of this
 matcher's region will not match anchors such as ^ and $.

 `],
				[/* block */ 'b', ` By default, a matcher uses anchoring region boundaries.`]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a boolean indicating whether or not to use anchoring bounds.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `this matcher`]
			]
		]]
	],
]);
