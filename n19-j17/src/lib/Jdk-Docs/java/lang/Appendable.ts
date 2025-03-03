import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Appendable', [
	[/* class description */
		[/* text */ 't', `An object to which `],
		[/* inline code block */ 'i', `char`],
		[/* text */ 't', ` sequences and values can be appended.  The
 `],
		[/* inline code block */ 'i', `Appendable`],
		[/* text */ 't', ` interface must be implemented by any class whose
 instances are intended to receive formatted output from a `],
		[/* reference */ 'r', `java.util.Formatter`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The characters to be appended should be valid Unicode characters as
 described in `],
			[/* reference */ 'r', `.Character#unicode`],
			[/* text */ 't', `.  Note that supplementary characters may be composed of
 multiple 16-bit `],
			[/* inline code block */ 'i', `char`],
			[/* text */ 't', ` values.

 `]
		]],
		[/* block */ 'b', ` Appendables are not necessarily safe for multithreaded access.  Thread
 safety is the responsibility of classes that extend and implement this
 interface.

 `],
		[/* block */ 'b', ` Since this interface may be implemented by existing classes
 with different styles of error handling there is no guarantee that
 errors will be propagated to the invoker.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'append(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character sequence to this `],
				[/* inline code block */ 'i', `Appendable`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Depending on which class implements the character sequence
 `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', `, the entire sequence may not be appended.  For
 instance, if `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is a `],
					[/* reference */ 'r', `java.nio.CharBuffer`],
					[/* text */ 't', ` then
 the subsequence to append is defined by the buffer's position and limit.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence to append.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then the four characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', ` are
         appended to this Appendable.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference to this `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]],
		[/* method */ 'append(java.lang.CharSequence,int,int)', [
			[/* method description */
				[/* text */ 't', `Appends a subsequence of the specified character sequence to this
 `],
				[/* inline code block */ 'i', `Appendable`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` An invocation of this method of the form `],
					[/* inline code block */ 'i', `out.append(csq, start, end)`],
					[/* text */ 't', `
 when `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, behaves in
 exactly the same way as the invocation

 `]
				]],
				[/* code block */ 'c', `     out.append(csq.subSequence(start, end)) `],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'csq', [/* parameter description */
					[/* text */ 't', `The character sequence from which a subsequence will be
         appended.  If `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, then characters
         will be appended as if `],
					[/* inline code block */ 'i', `csq`],
					[/* text */ 't', ` contained the four
         characters `],
					[/* inline code block */ 'i', `"null"`],
					[/* text */ 't', `.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `The index of the first character in the subsequence`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `The index of the character following the last character in the
         subsequence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` are negative, `],
					[/* inline code block */ 'i', `start`],
					[/* text */ 't', `
          is greater than `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', `, or `],
					[/* inline code block */ 'i', `end`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `csq.length()`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference to this `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]],
		[/* method */ 'append(char)', [
			[/* method description */
				[/* text */ 't', `Appends the specified character to this `],
				[/* inline code block */ 'i', `Appendable`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The character to append`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference to this `],
				[/* inline code block */ 'i', `Appendable`]
			]
		]]
	],
]);
