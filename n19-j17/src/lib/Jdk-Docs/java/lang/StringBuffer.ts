import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.StringBuffer', [
	[/* class description */
		[/* text */ 't', `A thread-safe, mutable sequence of characters.
 A string buffer is like a `],
		[/* reference */ 'r', `java.lang.String`],
		[/* text */ 't', `, but can be modified. At any
 point in time it contains some particular sequence of characters, but
 the length and content of the sequence can be changed through certain
 method calls.
 `],
		[/* block */ 'b', `
 String buffers are safe for use by multiple threads. The methods
 are synchronized where necessary so that all the operations on any
 particular instance behave as if they occur in some serial order
 that is consistent with the order of the method calls made by each of
 the individual threads involved.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The principal operations on a `],
			[/* inline code block */ 'i', `StringBuffer`],
			[/* text */ 't', ` are the
 `],
			[/* inline code block */ 'i', `append`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `insert`],
			[/* text */ 't', ` methods, which are
 overloaded so as to accept data of any type. Each effectively
 converts a given datum to a string and then appends or inserts the
 characters of that string to the string buffer. The
 `],
			[/* inline code block */ 'i', `append`],
			[/* text */ 't', ` method always adds these characters at the end
 of the buffer; the `],
			[/* inline code block */ 'i', `insert`],
			[/* text */ 't', ` method adds the characters at
 a specified point.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 For example, if `],
			[/* inline code block */ 'i', `z`],
			[/* text */ 't', ` refers to a string buffer object
 whose current contents are `],
			[/* inline code block */ 'i', `"start"`],
			[/* text */ 't', `, then
 the method call `],
			[/* inline code block */ 'i', `z.append("le")`],
			[/* text */ 't', ` would cause the string
 buffer to contain `],
			[/* inline code block */ 'i', `"startle"`],
			[/* text */ 't', `, whereas
 `],
			[/* inline code block */ 'i', `z.insert(4, "le")`],
			[/* text */ 't', ` would alter the string buffer to
 contain `],
			[/* inline code block */ 'i', `"starlet"`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In general, if sb refers to an instance of a `],
			[/* inline code block */ 'i', `StringBuffer`],
			[/* text */ 't', `,
 then `],
			[/* inline code block */ 'i', `sb.append(x)`],
			[/* text */ 't', ` has the same effect as
 `],
			[/* inline code block */ 'i', `sb.insert(sb.length(), x)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Whenever an operation occurs involving a source sequence (such as
 appending or inserting from a source sequence), this class synchronizes
 only on the string buffer performing the operation, not on the source.
 Note that while `],
			[/* inline code block */ 'i', `StringBuffer`],
			[/* text */ 't', ` is designed to be safe to use
 concurrently from multiple threads, if the constructor or the
 `],
			[/* inline code block */ 'i', `append`],
			[/* text */ 't', ` or `],
			[/* inline code block */ 'i', `insert`],
			[/* text */ 't', ` operation is passed a source sequence
 that is shared across threads, the calling code must ensure
 that the operation has a consistent and unchanging view of the source
 sequence for the duration of the operation.
 This could be satisfied by the caller holding a lock during the
 operation's call, by using an immutable source sequence, or by not
 sharing the source sequence across threads.
 `]
		]],
		[/* block */ 'b', `
 Every string buffer has a capacity. As long as the length of the
 character sequence contained in the string buffer does not exceed
 the capacity, it is not necessary to allocate a new internal
 buffer array. If the internal buffer overflows, it is
 automatically made larger.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 Unless otherwise noted, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to a constructor
 or method in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`],
			[/* text */ 't', ` to be
 thrown.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 As of  release JDK 5, this class has been supplemented with an equivalent
 class designed for use by a single thread, `],
			[/* reference */ 'r', `java.lang.StringBuilder`],
			[/* text */ 't', `.  The
 `],
			[/* inline code block */ 'i', `StringBuilder`],
			[/* text */ 't', ` class should generally be used in preference to
 this one, as it supports all of the same operations but it is faster, as
 it performs no synchronization.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.CharSequence)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string buffer that contains the same characters
 as the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', `. The initial capacity of
 the string buffer is `],
				[/* inline code block */ 'i', `16`],
				[/* text */ 't', ` plus the length of the
 `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` argument.`]
			],
			[/* parameters */
				[/* parameter */ 'seq', [/* parameter description */
					[/* text */ 't', `the sequence to copy.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string buffer initialized to the contents of the
 specified string. The initial capacity of the string buffer is
 `],
				[/* inline code block */ 'i', `16`],
				[/* text */ 't', ` plus the length of the string argument.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the initial contents of the buffer.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string buffer with no characters in it and
 the specified initial capacity.`]
			],
			[/* parameters */
				[/* parameter */ 'capacity', [/* parameter description */
					[/* text */ 't', `the initial capacity.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NegativeArraySizeException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `capacity`],
					[/* text */ 't', `
             argument is less than `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `.`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a string buffer with no characters in it and an
 initial capacity of 16 characters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length (character count).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the length of the sequence of characters currently
          represented by this object`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representing the data in this sequence.
 A new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` object is allocated and initialized to
 contain the character sequence currently represented by this
 object. This `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is then returned. Subsequent
 changes to this sequence do not affect the contents of the
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this sequence of characters.`]
			]
		]],
		[/* method */ 'append(int)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(long)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'lng', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(float)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(char[])', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array
 argument to this sequence.
 `],
				[/* block */ 'b', `
 The characters of the array argument are appended, in order, to
 the contents of this sequence. The length of this sequence
 increases by the length of the argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(char[])`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the characters to be appended.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of a subarray of the
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Characters of the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', `, starting at
 index `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `, are appended, in order, to the contents
 of this sequence. The length of this sequence increases
 by the value of `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the arguments were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(char[],int,int)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the characters to be appended.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the index of the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to append.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `s to append.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `offset < 0`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `len < 0`],
					[/* text */ 't', `
         or `],
					[/* inline code block */ 'i', `offset+len > str.length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(boolean)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `
 argument to the sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(boolean)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The argument is appended to the contents of this sequence.
 The length of this sequence increases by `],
					[/* inline code block */ 'i', `1`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the character in that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(double)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 argument to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Appends the specified string to this character sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` argument are appended, in
 order, increasing the length of this sequence by the length of the
 argument. If `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four
 characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are appended.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Let `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` be the length of this character sequence just prior to
 execution of the `],
					[/* inline code block */ 'i', `append`],
					[/* text */ 't', ` method. Then the character at
 index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in the new character sequence is equal to the character
 at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in the old character sequence, if `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` is less
 than `],
					[/* text */ 't', `n`],
					[/* text */ 't', `; otherwise, it is equal to the character at index
 `],
					[/* text */ 't', `k-n`],
					[/* text */ 't', ` in the argument `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(java.lang.StringBuffer)', [
			[/* method description */
				[/* text */ 't', `Appends the specified `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` to this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` argument are appended,
 in order, to the contents of this `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', `, increasing the
 length of this `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` by the length of the argument.
 If `],
					[/* inline code block */ 'i', `sb`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters
 `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are appended to this `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Let `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` be the length of the old character sequence, the one
 contained in the `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` just prior to execution of the
 `],
					[/* inline code block */ 'i', `append`],
					[/* text */ 't', ` method. Then the character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in
 the new character sequence is equal to the character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', `
 in the old character sequence, if `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` is less than `],
					[/* text */ 't', `n`],
					[/* text */ 't', `;
 otherwise, it is equal to the character at index `],
					[/* text */ 't', `k-n`],
					[/* text */ 't', ` in the
 argument `],
					[/* inline code block */ 'i', `sb`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method synchronizes on `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `, the destination
 object, but does not synchronize on the source (`],
					[/* inline code block */ 'i', `sb`],
					[/* text */ 't', `).`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'sb', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` to append.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` to this
 sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Characters of the argument `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `, starting at
 index `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, are appended, in order, to the contents of
 this sequence up to the (exclusive) index `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `. The length
 of this sequence is increased by the value of `],
					[/* inline code block */ 'i', `end - start`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Let `],
					[/* text */ 't', `n`],
					[/* text */ 't', ` be the length of this character sequence just prior to
 execution of the `],
					[/* inline code block */ 'i', `append`],
					[/* text */ 't', ` method. Then the character at
 index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in this character sequence becomes equal to the
 character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in this sequence, if `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` is less than
 `],
					[/* text */ 't', `n`],
					[/* text */ 't', `; otherwise, it is equal to the character at index
 `],
					[/* text */ 't', `k+start-n`],
					[/* text */ 't', ` in the argument `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then this method appends
 characters as if the s parameter was a sequence containing the four
 characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sequence to append.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the starting index of the subsequence to be appended.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the end index of the subsequence to be appended.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if
             `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is negative, or
             `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` or
             `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `s.length()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', ` argument.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the argument were converted
 to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(java.lang.Object)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `.Appendable#append(java.lang.CharSequence)`],
					[/* text */ 't', ` to this character sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` to this
 sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` argument are appended,
 in order, increasing the length of this sequence by the length of the
 argument.

 `]
				]],
				[/* block */ 'b', `The result of this method is exactly the same as if it were an
 invocation of this.append(s, 0, s.length());

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method synchronizes on `],
					[/* inline code block */ 'i', `this`],
					[/* text */ 't', `, the destination
 object, but does not synchronize on the source (`],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', `).

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters
 `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are appended.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` to append.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'getChars(int,int,char[],int)', [
			[/* method description */
				[/* text */ 't', `Characters are copied from this sequence into the
 destination character array `],
				[/* inline code block */ 'i', `dst`],
				[/* text */ 't', `. The first character to
 be copied is at index `],
				[/* inline code block */ 'i', `srcBegin`],
				[/* text */ 't', `; the last character to
 be copied is at index `],
				[/* inline code block */ 'i', `srcEnd-1`],
				[/* text */ 't', `. The total number of
 characters to be copied is `],
				[/* inline code block */ 'i', `srcEnd-srcBegin`],
				[/* text */ 't', `. The
 characters are copied into the subarray of `],
				[/* inline code block */ 'i', `dst`],
				[/* text */ 't', ` starting
 at index `],
				[/* inline code block */ 'i', `dstBegin`],
				[/* text */ 't', ` and ending at index:
 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `dstbegin + (srcEnd-srcBegin) - 1`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'srcBegin', [/* parameter description */
					[/* text */ 't', `start copying at this offset.`]
				]],
				[/* parameter */ 'srcEnd', [/* parameter description */
					[/* text */ 't', `stop copying at this offset.`]
				]],
				[/* parameter */ 'dst', [/* parameter description */
					[/* text */ 't', `the array to copy the data into.`]
				]],
				[/* parameter */ 'dstBegin', [/* parameter description */
					[/* text */ 't', `offset into `],
					[/* inline code block */ 'i', `dst`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if any of the following is true:
             `],
					[/* list */ 'l', [
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` is negative
             `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin`],
							[/* text */ 't', ` is negative
             `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', `the `],
							[/* inline code block */ 'i', `srcBegin`],
							[/* text */ 't', ` argument is greater than
             the `],
							[/* inline code block */ 'i', `srcEnd`],
							[/* text */ 't', ` argument.
             `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `srcEnd`],
							[/* text */ 't', ` is greater than
             `],
							[/* inline code block */ 'i', `this.length()`],
							[/* text */ 't', `.
             `]
						]],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `dstBegin+srcEnd-srcBegin`],
							[/* text */ 't', ` is greater than
             `],
							[/* inline code block */ 'i', `dst.length`]
						]]
					]]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'compareTo(java.lang.StringBuffer)', [
			[/* method description */
				[/* text */ 't', `Compares two `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` instances lexicographically. This method
 follows the same rules for lexicographical comparison as defined in the
 `],
				[/* reference */ 'r', `.CharSequence#compare(java.lang.CharSequence,java.lang.CharSequence)`],
				[/* text */ 't', ` method.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 For finer-grained, locale-sensitive String comparison, refer to
 `],
					[/* reference */ 'r', `java.text.Collator`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'another', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `StringBuffer`],
					[/* text */ 't', ` to be compared with`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the value `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if this `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` contains the same
 character sequence as that of the argument `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `; a negative integer
 if this `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` is lexicographically less than the
 `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` argument; or a positive integer if this `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', `
 is lexicographically greater than the `],
				[/* inline code block */ 'i', `StringBuffer`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'indexOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of the
 specified substring.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the smallest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `this.toString().startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified substring,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'indexOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the first occurrence of the
 specified substring, starting at the specified index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the smallest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `k >= Math.min(fromIndex, this.length()) &&
                   this.toString().startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index from which to start the search.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the first occurrence of the specified substring,
          starting at the specified index,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'insert(int,char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of a subarray of the `],
				[/* inline code block */ 'i', `str`],
				[/* text */ 't', `
 array argument into this sequence. The subarray begins at the
 specified `],
				[/* inline code block */ 'i', `offset`],
				[/* text */ 't', ` and extends `],
				[/* inline code block */ 'i', `len`],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s.
 The characters of the subarray are inserted into this sequence at
 the position indicated by `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `. The length of this
 sequence increases by `],
				[/* inline code block */ 'i', `len`],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `position at which to insert subarray.`]
				]],
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `A `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array.`]
				]],
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the index of the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` in subarray to
             be inserted.`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `s in the subarray to
             be inserted.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
             is negative or greater than `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `, or
             `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` are negative, or
             `],
					[/* inline code block */ 'i', `(offset+len)`],
					[/* text */ 't', ` is greater than
             `],
					[/* inline code block */ 'i', `str.length`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This object`]
			]
		]],
		[/* method */ 'insert(int,float)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'f', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `float`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Inserts the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the `],
					[/* inline code block */ 'i', `CharSequence`],
					[/* text */ 't', ` argument are inserted,
 in order, into this sequence at the indicated offset, moving up
 any characters originally above that position and increasing the length
 of this sequence by the length of the argument s.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The result of this method is exactly the same as if it were an
 invocation of this object's
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence,int,int)`, `insert`],
					[/* text */ 't', `(dstOffset, s, 0, s.length())
 method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters
 `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are inserted into this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dstOffset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sequence to be inserted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,double)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'd', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `double`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,char[])', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` array
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the array argument are inserted into the
 contents of this sequence at the position indicated by
 `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', `. The length of this sequence increases by
 the length of the argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(char[])`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a character array.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Inserts the string into this character sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The characters of the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` argument are inserted, in
 order, into this sequence at the indicated offset, moving up any
 characters originally above that position and increasing the length
 of this sequence by the length of the argument. If
 `],
					[/* inline code block */ 'i', `str`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters
 `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are inserted into this sequence.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in the new character sequence is
 equal to:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` in the old character sequence, if
 `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is less than `],
						[/* inline code block */ 'i', `offset`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `-offset`],
						[/* text */ 't', ` in the
 argument `],
						[/* inline code block */ 'i', `str`],
						[/* text */ 't', `, if `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is not less than
 `],
						[/* inline code block */ 'i', `offset`],
						[/* text */ 't', ` but is less than `],
						[/* inline code block */ 'i', `offset+str.length()`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `-str.length()`],
						[/* text */ 't', ` in the
 old character sequence, if `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is not less than
 `],
						[/* inline code block */ 'i', `offset+str.length()`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `a string.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,boolean)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(boolean)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'b', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,char)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the character in that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,int)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the second `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'i', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,long)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `
 argument into this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(double)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'l', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Inserts the string representation of the `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `
 argument into this character sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The overall effect is exactly as if the second argument were
 converted to a string by the method `],
					[/* reference */ 'r', `.String#valueOf(java.lang.Object)`],
					[/* text */ 't', `,
 and the characters of that string were then
 `],
					[/* reference */ 'r', `#insert(int,java.lang.CharSequence)`, `inserted`],
					[/* text */ 't', ` into this character
 sequence at the indicated offset.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `offset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset.`]
				]],
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `Object`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the offset is invalid.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'insert(int,java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Inserts a subsequence of the specified `],
				[/* inline code block */ 'i', `CharSequence`],
				[/* text */ 't', ` into
 this sequence.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The subsequence of the argument `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` specified by
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are inserted,
 in order, into this sequence at the specified destination offset, moving
 up any characters originally above that position. The length of this
 sequence is increased by `],
					[/* inline code block */ 'i', `end - start`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The character at index `],
					[/* text */ 't', `k`],
					[/* text */ 't', ` in this sequence becomes equal to:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` in this sequence, if
 `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is less than `],
						[/* inline code block */ 'i', `dstOffset`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `+start-dstOffset`],
						[/* text */ 't', ` in
 the argument `],
						[/* inline code block */ 'i', `s`],
						[/* text */ 't', `, if `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is greater than or equal to
 `],
						[/* inline code block */ 'i', `dstOffset`],
						[/* text */ 't', ` but is less than `],
						[/* inline code block */ 'i', `dstOffset+end-start`]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `the character at index `],
						[/* text */ 't', `k`],
						[/* inline code block */ 'i', `-(end-start)`],
						[/* text */ 't', ` in this
 sequence, if `],
						[/* text */ 't', `k`],
						[/* text */ 't', ` is greater than or equal to
 `],
						[/* inline code block */ 'i', `dstOffset+end-start`]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `dstOffset`],
					[/* text */ 't', ` argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than or equal to the `],
					[/* reference */ 'r', `.CharSequence#length()`],
					[/* text */ 't', `
 of this sequence.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The start argument must be nonnegative, and not greater than
 `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The end argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `, and less than or equal to the length of s.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `s`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then this method inserts
 characters as if the s parameter was a sequence containing the four
 characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'dstOffset', [/* parameter description */
					[/* text */ 't', `the offset in this sequence.`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the sequence to be inserted.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the starting index of the subsequence to be inserted.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the end index of the subsequence to be inserted.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `dstOffset`],
					[/* text */ 't', `
             is negative or greater than `],
					[/* inline code block */ 'i', `this.length()`],
					[/* text */ 't', `, or
              `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative, or
              `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` or
              `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than `],
					[/* inline code block */ 'i', `s.length()`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'charAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value in this sequence at the specified index.
 The first `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value is at index `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `, the next at index
 `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `, and so on, as in array indexing.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The index argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than the length of this sequence.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value specified by the index is a
 `],
					[/* reference */ 'r', `.Character#unicode`],
					[/* text */ 't', `, the surrogate
 value is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the desired `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is
             negative or greater than or equal to `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` value at the specified index.`]
			]
		]],
		[/* method */ 'codePointAt(int)', [
			[/* method description */
				[/* text */ 't', `Returns the character (Unicode code point) at the specified
 index. The index refers to `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 (Unicode code units) and ranges from `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` to
 `],
				[/* reference */ 'r', `.CharSequence#length()`],
				[/* inline code block */ 'i', `- 1`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value specified at the given index
 is in the high-surrogate range, the following index is less
 than the length of this sequence, and the
 `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at the following index is in the
 low-surrogate range, then the supplementary code point
 corresponding to this surrogate pair is returned. Otherwise,
 the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at the given index is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` values`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
             argument is negative or not less than the length of this
             sequence.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the code point value of the character at the
             `],
				[/* inline code block */ 'i', `index`]
			]
		]],
		[/* method */ 'codePointBefore(int)', [
			[/* method description */
				[/* text */ 't', `Returns the character (Unicode code point) before the specified
 index. The index refers to `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values
 (Unicode code units) and ranges from `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', ` to `],
				[/* reference */ 'r', `.CharSequence#length()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `(index - 1)`],
					[/* text */ 't', `
 is in the low-surrogate range, `],
					[/* inline code block */ 'i', `(index - 2)`],
					[/* text */ 't', ` is not
 negative, and the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `(index - 2)`],
					[/* text */ 't', ` is in the high-surrogate range, then the
 supplementary code point value of the surrogate pair is
 returned. If the `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` value at `],
					[/* inline code block */ 'i', `index - 1`],
					[/* text */ 't', ` is an unpaired low-surrogate or a high-surrogate, the
 surrogate value is returned.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index following the code point that should be returned`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
            argument is less than 1 or greater than the length
            of this sequence.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Unicode code point value before the given index.`]
			]
		]],
		[/* method */ 'codePointCount(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the number of Unicode code points in the specified text
 range of this sequence. The text range begins at the specified
 `],
				[/* inline code block */ 'i', `beginIndex`],
				[/* text */ 't', ` and extends to the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` at
 index `],
				[/* inline code block */ 'i', `endIndex - 1`],
				[/* text */ 't', `. Thus the length (in
 `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `s) of the text range is
 `],
				[/* inline code block */ 'i', `endIndex-beginIndex`],
				[/* text */ 't', `. Unpaired surrogates within
 this sequence count as one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'beginIndex', [/* parameter description */
					[/* text */ 't', `the index to the first `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]],
				[/* parameter */ 'endIndex', [/* parameter description */
					[/* text */ 't', `the index after the last `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` of
 the text range.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `
 is larger than the length of this sequence, or
 `],
					[/* inline code block */ 'i', `beginIndex`],
					[/* text */ 't', ` is larger than `],
					[/* inline code block */ 'i', `endIndex`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of Unicode code points in the specified text
 range`]
			]
		]],
		[/* method */ 'offsetByCodePoints(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this sequence that is offset from the
 given `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` by `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` code
 points. Unpaired surrogates within the text range given by
 `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `codePointOffset`],
				[/* text */ 't', ` count as
 one code point each.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index to be offset`]
				]],
				[/* parameter */ 'codePointOffset', [/* parameter description */
					[/* text */ 't', `the offset in code points`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
   is negative or larger then the length of this sequence,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is positive and the subsequence
   starting with `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer than
   `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points,
   or if `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` is negative and the subsequence
   before `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` has fewer than the absolute value of
   `],
					[/* inline code block */ 'i', `codePointOffset`],
					[/* text */ 't', ` code points.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the index within this sequence`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of the
 specified substring, searching backward starting at the specified index.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the largest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `k <= Math.min(fromIndex, this.length()) &&
                   this.toString().startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]],
				[/* parameter */ 'fromIndex', [/* parameter description */
					[/* text */ 't', `the index to start the search from.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified substring,
          searching backward from the specified index,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'lastIndexOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the index within this string of the last occurrence of the
 specified substring.  The last occurrence of the empty string "" is
 considered to occur at the index value `],
				[/* inline code block */ 'i', `this.length()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The returned index is the largest value `],
					[/* inline code block */ 'i', `k`],
					[/* text */ 't', ` for which:
 `]
				]],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `this.toString().startsWith(str, k)`]
				]],
				[/* text */ 't', `
 If no such value of `],
				[/* inline code block */ 'i', `k`],
				[/* text */ 't', ` exists, then `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` is returned.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the substring to search for.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index of the last occurrence of the specified substring,
          or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if there is no such occurrence.`]
			]
		]],
		[/* method */ 'substring(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains a subsequence of
 characters currently contained in this sequence. The
 substring begins at the specified `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` and
 extends to the character at index `],
				[/* inline code block */ 'i', `end - 1`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The beginning index, inclusive.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The ending index, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
             or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative or greater than
             `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is
             greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new string.`]
			]
		]],
		[/* method */ 'substring(int)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` that contains a subsequence of
 characters currently contained in this character sequence. The
 substring begins at the specified index and extends to the end of
 this sequence.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The beginning index, inclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` is
             less than zero, or greater than the length of this object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The new string.`]
			]
		]],
		[/* method */ 'replace(int,int,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Replaces the characters in a substring of this sequence
 with characters in the specified `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The substring
 begins at the specified `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` and extends to the character
 at index `],
				[/* inline code block */ 'i', `end - 1`],
				[/* text */ 't', ` or to the end of the
 sequence if no such character exists. First the
 characters in the substring are removed and then the specified
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` is inserted at `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', `. (This
 sequence will be lengthened to accommodate the
 specified String if necessary.)`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The beginning index, inclusive.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The ending index, exclusive.`]
				]],
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `String that will replace previous contents.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
             is negative, greater than `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `, or
             greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This object.`]
			]
		]],
		[/* method */ 'subSequence(int,int)', [
			[/* method description */
				[/* text */ 't', `Returns a new character sequence that is a subsequence of this sequence.

 `],
				[/* block */ 'b', ` An invocation of this method of the form

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `sb.subSequence(begin, end)`]
				]],
				[/* text */ 't', `

 behaves in exactly the same way as the invocation

 `],
				[/* code block */ 'c', [
					[/* inline code block */ 'i', `sb.substring(begin, end)`]
				]],
				[/* text */ 't', `

 This method is provided so that this class can
 implement the `],
				[/* reference */ 'r', `java.lang.CharSequence`],
				[/* text */ 't', ` interface.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the start index, inclusive.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `the end index, exclusive.`]
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
				[/* text */ 't', `the specified subsequence.`]
			]
		]],
		[/* method */ 'delete(int,int)', [
			[/* method description */
				[/* text */ 't', `Removes the characters in a substring of this sequence.
 The substring begins at the specified `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` and extends to
 the character at index `],
				[/* inline code block */ 'i', `end - 1`],
				[/* text */ 't', ` or to the end of the
 sequence if no such character exists. If
 `],
				[/* inline code block */ 'i', `start`],
				[/* text */ 't', ` is equal to `],
				[/* inline code block */ 'i', `end`],
				[/* text */ 't', `, no changes are made.`]
			],
			[/* parameters */
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The beginning index, inclusive.`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The ending index, exclusive.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
             is negative, greater than `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `, or
             greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This object.`]
			]
		]],
		[/* method */ 'setLength(int)', [
			[/* method description */
				[/* text */ 't', `Sets the length of the character sequence.
 The sequence is changed to a new character sequence
 whose length is specified by the argument. For every nonnegative
 index `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` less than `],
				[/* inline code block */ 'i', `newLength`],
				[/* text */ 't', `, the character at
 index `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` in the new character sequence is the same as the
 character at index `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` in the old sequence if `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` is less
 than the length of the old character sequence; otherwise, it is the
 null character `],
				[/* inline code block */ 'i', `'\\u0000'`],
				[/* text */ 't', `.

 In other words, if the `],
				[/* inline code block */ 'i', `newLength`],
				[/* text */ 't', ` argument is less than
 the current length, the length is changed to the specified length.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` argument is greater than or equal
 to the current length, sufficient null characters
 (`],
					[/* inline code block */ 'i', `'\\u0000'`],
					[/* text */ 't', `) are appended so that
 length becomes the `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` argument must be greater than or equal
 to `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newLength', [/* parameter description */
					[/* text */ 't', `the new length`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the
               `],
					[/* inline code block */ 'i', `newLength`],
					[/* text */ 't', ` argument is negative.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'capacity()', [
			[/* method description */
				[/* text */ 't', `Returns the current capacity. The capacity is the number of characters
 that can be stored (including already written characters), beyond which
 an allocation will occur.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current capacity`]
			]
		]],
		[/* method */ 'ensureCapacity(int)', [
			[/* method description */
				[/* text */ 't', `Ensures that the capacity is at least equal to the specified minimum.
 If the current capacity is less than the argument, then a new internal
 array is allocated with greater capacity. The new capacity is the
 larger of:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The `],
						[/* inline code block */ 'i', `minimumCapacity`],
						[/* text */ 't', ` argument.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Twice the old capacity, plus `],
						[/* inline code block */ 'i', `2`],
						[/* text */ 't', `.
 `]
					]]
				]],
				[/* text */ 't', `
 If the `],
				[/* inline code block */ 'i', `minimumCapacity`],
				[/* text */ 't', ` argument is nonpositive, this
 method takes no action and simply returns.
 Note that subsequent operations on this object can reduce the
 actual capacity below that requested here.`]
			],
			[/* parameters */
				[/* parameter */ 'minimumCapacity', [/* parameter description */
					[/* text */ 't', `the minimum desired capacity.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'trimToSize()', [
			[/* method description */
				[/* text */ 't', `Attempts to reduce storage used for the character sequence.
 If the buffer is larger than necessary to hold its current sequence of
 characters, then it may be resized to become more space efficient.
 Calling this method may, but is not required to, affect the value
 returned by a subsequent call to the `],
				[/* reference */ 'r', `#capacity()`, `capacity()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setCharAt(int,char)', [
			[/* method description */
				[/* text */ 't', `The character at the specified index is set to `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', `. This
 sequence is altered to represent a new character sequence that is
 identical to the old character sequence, except that it contains the
 character `],
				[/* inline code block */ 'i', `ch`],
				[/* text */ 't', ` at position `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The index argument must be greater than or equal to
 `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, and less than the length of this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the index of the character to modify.`]
				]],
				[/* parameter */ 'ch', [/* parameter description */
					[/* text */ 't', `the new character.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', ` is
             negative or greater than or equal to `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'appendCodePoint(int)', [
			[/* method description */
				[/* text */ 't', `Appends the string representation of the `],
				[/* inline code block */ 'i', `codePoint`],
				[/* text */ 't', `
 argument to this sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The argument is appended to the contents of this sequence.
 The length of this sequence increases by
 `],
					[/* reference */ 'r', `.Character#charCount(int)`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The overall effect is exactly as if the argument were
 converted to a `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` array by the method
 `],
					[/* reference */ 'r', `.Character#toChars(int)`],
					[/* text */ 't', ` and the character in that array
 were then `],
					[/* reference */ 'r', `#append(char%5B%5D)`, `appended`],
					[/* text */ 't', ` to this character
 sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'codePoint', [/* parameter description */
					[/* text */ 't', `a Unicode code point`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]],
		[/* method */ 'deleteCharAt(int)', [
			[/* method description */
				[/* text */ 't', `Removes the `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` at the specified position in this
 sequence. This sequence is shortened by one `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note: If the character at the given index is a supplementary
 character, this method does not remove the entire character. If
 correct handling of supplementary characters is required,
 determine the number of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', `s to remove by calling
 `],
					[/* inline code block */ 'i', `Character.charCount(thisSequence.codePointAt(index))`],
					[/* text */ 't', `,
 where `],
					[/* inline code block */ 'i', `thisSequence`],
					[/* text */ 't', ` is this sequence.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `Index of `],
					[/* inline code block */ 'i', `char`],
					[/* text */ 't', ` to remove`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.StringIndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if the `],
					[/* inline code block */ 'i', `index`],
					[/* text */ 't', `
              is negative or greater than or equal to
              `],
					[/* inline code block */ 'i', `length()`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This object.`]
			]
		]],
		[/* method */ 'reverse()', [
			[/* method description */
				[/* text */ 't', `Causes this character sequence to be replaced by the reverse of
 the sequence. If there are any surrogate pairs included in the
 sequence, these are treated as single characters for the
 reverse operation. Thus, the order of the high-low surrogates
 is never reversed.

 Let `],
				[/* text */ 't', `n`],
				[/* text */ 't', ` be the character length of this character sequence
 (not the length in `],
				[/* inline code block */ 'i', `char`],
				[/* text */ 't', ` values) just prior to
 execution of the `],
				[/* inline code block */ 'i', `reverse`],
				[/* text */ 't', ` method. Then the
 character at index `],
				[/* text */ 't', `k`],
				[/* text */ 't', ` in the new character sequence is
 equal to the character at index `],
				[/* text */ 't', `n-k-1`],
				[/* text */ 't', ` in the old
 character sequence.

 `],
				[/* block */ 'b', `Note that the reverse operation may result in producing
 surrogate pairs that were unpaired low-surrogates and
 high-surrogates before the operation. For example, reversing
 "\\uDC00\\uD800" produces "\\uD800\\uDC00" which is
 a valid surrogate pair.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a reference to this object.`]
			]
		]]
	],
]);
