import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.CharSequence', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `CharSequence`],
		[/* text */ 't', ` is a readable sequence of `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` values. This
 interface provides uniform, read-only access to many different kinds of
 `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` sequences.
 A `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` value represents a character in the `],
		[/* text */ 't', `Basic
 Multilingual Plane (BMP)`],
		[/* text */ 't', ` or a surrogate. Refer to `],
		[/* reference */ 'r', `java.lang.Character#unicode`, `Unicode Character Representation`],
		[/* text */ 't', ` for details.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This interface does not refine the general contracts of the `],
			[/* reference */ 'r', `java.lang.Object#equals(java.lang.Object)`, `equals`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.lang.Object#hashCode()`, `hashCode`],
			[/* text */ 't', ` methods. The result of testing two objects
 that implement `],
			[/* inline code block */ 'i', `CharSequence`],
			[/* text */ 't', ` for equality is therefore, in general, undefined.
 Each object may be implemented by a different class, and there
 is no guarantee that each class will be capable of testing its instances
 for equality with those of the other.  It is therefore inappropriate to use
 arbitrary `],
			[/* inline code block */ 'i', `CharSequence`],
			[/* text */ 't', ` instances as elements in a set or as keys in
 a map. `]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'charAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the specified index.  An index ranges from zero
 to `],
				[/* inline code block */ 'i', `length() - 1`],
				[/* text */ 't', `.  The first `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value of the sequence is at
 index zero, the next at index one, and so on, as for array
 indexing.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value specified by the index is a
 `],
					[/* reference */ 'r', `java.lang.Character#unicode`, `surrogate`],
					[/* text */ 't', `, the surrogate
 value is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value to be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` argument is negative or not less than
          `],
					[/* inline code block */ 'i', `length()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of this character sequence.  The length is the number
 of 16-bit `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s in the sequence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the number of `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s in this sequence`]
			]
		]],
		[/* method */ 'subSequence(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` that is a subsequence of this sequence.
 The subsequence starts with the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the specified index and
 ends with the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at index `],
				[/* inline code block */ 'i', `end - 1`],
				[/* text */ 't', `.  The length
 (in `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s) of the
 returned sequence is `],
				[/* inline code block */ 'i', `end - start`],
				[/* text */ 't', `, so if `],
				[/* inline code block */ 'i', `start == end`],
				[/* text */ 't', `
 then an empty sequence is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the start index, inclusive`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the end index, exclusive`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative,
          if `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `,
          or if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `end`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the specified subsequence`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string containing the characters in this sequence in the same
 order as this sequence.  The length of the string will be the length of
 this sequence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string consisting of exactly this sequence of characters`]
			]
		]],
		[/* method */ 'isEmpty()', [
			[/* method description */
				[/* text */ 't', `Returns `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this character sequence is empty.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if `],
				[/* reference */ 'r', `#length()`, `length()`],
				[/* text */ 't', ` is `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `, otherwise
 `],
				[/* inline code block */ 'i', `false`]
			]
		]],
		[/* method */ 'chars()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` zero-extending the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 from this sequence.  Any char which maps to a `],
				[/* reference */ 'r', `java.lang.Character#unicode`, `surrogate code point`],
				[/* text */ 't', ` is passed through uninterpreted.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The stream binds to this sequence when the terminal stream operation
 commences (specifically, for mutable sequences the spliterator for the
 stream is `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `).
 If the sequence is modified during that operation then the result is
 undefined.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an IntStream of char values from this sequence`]
			]
		]],
		[/* method */ 'codePoints()', [
			[/* method description */
				[/* text */ 't', `Returns a stream of code point values from this sequence.  Any surrogate
 pairs encountered in the sequence are combined as if by `],
				[/* reference */ 'r', `java.lang.Character#toCodePoint(char,char)`, `Character.toCodePoint`],
				[/* text */ 't', ` and the result is passed
 to the stream. Any other code units, including ordinary BMP characters,
 unpaired surrogates, and undefined code units, are zero-extended to
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` values which are then passed to the stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The stream binds to this sequence when the terminal stream operation
 commences (specifically, for mutable sequences the spliterator for the
 stream is `],
					[/* reference */ 'r', `java.util.Spliterator#binding`, `late-binding`],
					[/* text */ 't', `).
 If the sequence is modified during that operation then the result is
 undefined.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an IntStream of Unicode code points from this sequence`]
			]
		]],
		[/* method */ 'compare(java.lang.CharSequence,java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` instances lexicographically. Returns a
 negative value, zero, or a positive value if the first sequence is lexicographically
 less than, equal to, or greater than the second, respectively.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The lexicographical ordering of `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` is defined as follows.
 Consider a `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` `],
					[/* text */ 't', `cs`],
					[/* text */ 't', ` of length `],
					[/* text */ 't', `len`],
					[/* text */ 't', ` to be a
 sequence of char values, `],
					[/* text */ 't', `cs[0]`],
					[/* text */ 't', ` to `],
					[/* text */ 't', `cs[len-1]`],
					[/* text */ 't', `. Suppose `],
					[/* text */ 't', `k`],
					[/* text */ 't', `
 is the lowest index at which the corresponding char values from each sequence
 differ. The lexicographic ordering of the sequences is determined by a numeric
 comparison of the char values `],
					[/* text */ 't', `cs1[k]`],
					[/* text */ 't', ` with `],
					[/* text */ 't', `cs2[k]`],
					[/* text */ 't', `. If there is
 no such index `],
					[/* text */ 't', `k`],
					[/* text */ 't', `, the shorter sequence is considered lexicographically
 less than the other. If the sequences have the same length, the sequences are
 considered lexicographically equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cs1', [/* parameter description */
					[/* text */ 't', `the first `],
					[/* inline code block */ 'i', `CharSequence`]
				]],
				[/* parameter */ 'cs2', [/* parameter description */
					[/* text */ 't', `the second `],
					[/* inline code block */ 'i', `CharSequence`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if the two `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` are equal;
          a negative integer if the first `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `
          is lexicographically less than the second; or a
          positive integer if the first `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` is
          lexicographically greater than the second.`]
			]
		]]
	],
]);
