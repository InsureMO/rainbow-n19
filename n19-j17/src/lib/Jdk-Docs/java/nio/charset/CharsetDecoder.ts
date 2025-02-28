import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.charset.CharsetDecoder', [
	[/* class description */
		[/* text */ 't', `An engine that can transform a sequence of bytes in a specific charset into a sequence of
 sixteen-bit Unicode characters.

 `],
		[/* text */ 't', ``],
		[/* block */ 'b', [
			[/* text */ 't', ` The input byte sequence is provided in a byte buffer or a series
 of such buffers.  The output character sequence is written to a character buffer
 or a series of such buffers.  A decoder should always be used by making
 the following sequence of method invocations, hereinafter referred to as a
 `],
			[/* text */ 't', `decoding operation`],
			[/* text */ 't', `:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Reset the decoder via the `],
					[/* reference */ 'r', `reset`],
					[/* text */ 't', ` method, unless it
   has not been used before; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', ` method zero or more times, as
   long as additional input may be available, passing `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for the
   `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', ` argument and filling the input buffer and flushing the
   output buffer between invocations; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', ` method one final time, passing
   `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', ` argument; and then `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `flush`],
					[/* text */ 't', ` method so that the decoder can
   flush any internal state to the output buffer. `]
				]]
			]]
		]],
		[/* text */ 't', `

 Each invocation of the `],
		[/* reference */ 'r', `decode`],
		[/* text */ 't', ` method will decode as many
 bytes as possible from the input buffer, writing the resulting characters
 to the output buffer.  The `],
		[/* reference */ 'r', `decode`],
		[/* text */ 't', ` method returns when more
 input is required, when there is not enough room in the output buffer, or
 when a decoding error has occurred.  In each case a `],
		[/* reference */ 'r', `java.nio.charset.CoderResult`],
		[/* text */ 't', `
 object is returned to describe the reason for termination.  An invoker can
 examine this object and fill the input buffer, flush the output buffer, or
 attempt to recover from a decoding error, as appropriate, and try again.

 `],
		[/* text */ 't', ``],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` There are two general types of decoding errors.  If the input byte
 sequence is not legal for this charset then the input is considered `],
			[/* text */ 't', `malformed`],
			[/* text */ 't', `.  If
 the input byte sequence is legal but cannot be mapped to a valid
 Unicode character then an `],
			[/* text */ 't', `unmappable character`],
			[/* text */ 't', ` has been encountered.

 `],
			[/* text */ 't', ``]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` How a decoding error is handled depends upon the action requested for
 that type of error, which is described by an instance of the `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction`],
			[/* text */ 't', ` class.  The possible error actions are to `],
			[/* external link */ 'a', `CodingErrorAction.html#IGNORE`, `ignore`],
			[/* text */ 't', ` the erroneous input, `],
			[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `report`],
			[/* text */ 't', ` the error to the invoker via
 the returned `],
			[/* reference */ 'r', `java.nio.charset.CoderResult`],
			[/* text */ 't', ` object, or `],
			[/* external link */ 'a', `CodingErrorAction.html#REPLACE`, `replace`],
			[/* text */ 't', ` the erroneous input with the current value of the
 replacement string.  The replacement






 has the initial value `],
			[/* inline code block */ 'i', `"\\uFFFD"`],
			[/* text */ 't', `;


 its value may be changed via the `],
			[/* reference */ 'r', `replaceWith`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The default action for malformed-input and unmappable-character errors
 is to `],
			[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `report`],
			[/* text */ 't', ` them.  The
 malformed-input error action may be changed via the `],
			[/* reference */ 'r', `onMalformedInput`],
			[/* text */ 't', ` method; the
 unmappable-character action may be changed via the `],
			[/* reference */ 'r', `onUnmappableCharacter`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class is designed to handle many of the details of the decoding
 process, including the implementation of error actions.  A decoder for a
 specific charset, which is a concrete subclass of this class, need only
 implement the abstract `],
			[/* reference */ 'r', `decodeLoop`],
			[/* text */ 't', ` method, which
 encapsulates the basic decoding loop.  A subclass that maintains internal
 state should, additionally, override the `],
			[/* reference */ 'r', `implFlush`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `implReset`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', ` Instances of this class are not safe for use by multiple concurrent
 threads.  `]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.nio.charset.Charset,float,float)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new decoder.  The new decoder will have the given
 chars-per-byte values and its replacement will be the
 string `],
				[/* inline code block */ 'i', `"\\uFFFD"`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The charset that created this decoder`]
				]],
				[/* parameter */ 'averageCharsPerByte', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the expected number of
         characters that will be produced for each input byte`]
				]],
				[/* parameter */ 'maxCharsPerByte', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the maximum number of
         characters that will be produced for each input byte`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'maxCharsPerByte()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum number of characters that will be produced for each
 byte of input.  This value may be used to compute the worst-case size
 of the output buffer required for a given input sequence. This value
 accounts for any necessary content-independent prefix or suffix




 characters.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The maximum number of characters that will be produced per
          byte of input`]
			]
		]],
		[/* method */ 'onMalformedInput(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Changes this decoder's action for malformed-input errors.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `implOnMalformedInput`],
					[/* text */ 't', ` method, passing the new action.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action; must not be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the precondition on the parameter does not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This decoder`]
			]
		]],
		[/* method */ 'onUnmappableCharacter(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Changes this decoder's action for unmappable-character errors.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `implOnUnmappableCharacter`],
					[/* text */ 't', ` method, passing the new action.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action; must not be `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the precondition on the parameter does not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This decoder`]
			]
		]],
		[/* method */ 'decode(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Convenience method that decodes the remaining content of a single input
 byte buffer into a newly-allocated character buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method implements an entire `],
					[/* text */ 't', `decoding operation`],
					[/* text */ 't', `; that is, it resets this decoder, then it decodes the
 bytes in the given byte buffer, and finally it flushes this
 decoder.  This method should therefore not be invoked if a decoding
 operation is already in progress.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input byte buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If a decoding operation is already in progress`]
				]],
				[/* throw */ 'java.nio.charset.MalformedInputException', [/* throw description */
					[/* text */ 't', `If the byte sequence starting at the input buffer's current
          position is not legal for this charset and the current malformed-input action
          is `],
					[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `CodingErrorAction.REPORT`]
				]],
				[/* throw */ 'java.nio.charset.UnmappableCharacterException', [/* throw description */
					[/* text */ 't', `If the byte sequence starting at the input buffer's current
          position cannot be mapped to an equivalent character sequence and
          the current unmappable-character action is `],
					[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `CodingErrorAction.REPORT`]
				]],
				[/* throw */ 'java.nio.charset.CharacterCodingException', UDF]
			],
			[/* return description */
				[/* text */ 't', `A newly-allocated character buffer containing the result of the
         decoding operation.  The buffer's position will be zero and its
         limit will follow the last character written.`]
			]
		]],
		[/* method */ 'decode(java.nio.ByteBuffer,java.nio.CharBuffer,boolean)', [
			[/* method description */
				[/* text */ 't', `Decodes as many bytes as possible from the given input buffer,
 writing the results to the given output buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffers are read from, and written to, starting at their current
 positions.  At most `],
					[/* external link */ 'a', `../Buffer.html#remaining()`, `in.remaining()`],
					[/* text */ 't', ` bytes
 will be read and at most `],
					[/* external link */ 'a', `../Buffer.html#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 characters will be written.  The buffers' positions will be advanced to
 reflect the bytes read and the characters written, but their marks and
 limits will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition to reading bytes from the input buffer and writing
 characters to the output buffer, this method returns a `],
					[/* reference */ 'r', `java.nio.charset.CoderResult`],
					[/* text */ 't', `
 object to describe its reason for termination:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
							[/* text */ 't', ` indicates that as much of the
   input buffer as possible has been decoded.  If there is no further
   input then the invoker can proceed to the next step of the
   `],
							[/* text */ 't', `decoding operation`],
							[/* text */ 't', `.  Otherwise this method
   should be invoked again with further input.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* external link */ 'a', `CoderResult.html#OVERFLOW`, `CoderResult.OVERFLOW`],
							[/* text */ 't', ` indicates that there is
   insufficient space in the output buffer to decode any more bytes.
   This method should be invoked again with an output buffer that has
   more `],
							[/* external link */ 'a', `../Buffer.html#remaining()`, `remaining`],
							[/* text */ 't', ` characters. This is
   typically done by draining any decoded characters from the output
   buffer.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A `],
							[/* external link */ 'a', `CoderResult.html#malformedForLength(int)`, `malformed-input`],
							[/* text */ 't', ` result indicates that a malformed-input
   error has been detected.  The malformed bytes begin at the input
   buffer's (possibly incremented) position; the number of malformed
   bytes may be determined by invoking the result object's `],
							[/* external link */ 'a', `CoderResult.html#length()`, `length`],
							[/* text */ 't', ` method.  This case applies only if the
   `],
							[/* reference */ 'r', `malformed action`],
							[/* text */ 't', ` of this decoder
   is `],
							[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `CodingErrorAction.REPORT`],
							[/* text */ 't', `; otherwise the malformed input
   will be ignored or replaced, as requested.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` An `],
							[/* external link */ 'a', `CoderResult.html#unmappableForLength(int)`, `unmappable-character`],
							[/* text */ 't', ` result indicates that an
   unmappable-character error has been detected.  The bytes that
   decode the unmappable character begin at the input buffer's (possibly
   incremented) position; the number of such bytes may be determined
   by invoking the result object's `],
							[/* external link */ 'a', `CoderResult.html#length()`, `length`],
							[/* text */ 't', `
   method.  This case applies only if the `],
							[/* reference */ 'r', `unmappable action`],
							[/* text */ 't', ` of this decoder is `],
							[/* external link */ 'a', `CodingErrorAction.html#REPORT`, `CodingErrorAction.REPORT`],
							[/* text */ 't', `; otherwise the unmappable character will be
   ignored or replaced, as requested.  `]
						]]
					]]
				]],
				[/* text */ 't', `

 In any case, if this method is to be reinvoked in the same decoding
 operation then care should be taken to preserve any bytes remaining
 in the input buffer so that they are available to the next invocation.

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', ` parameter advises this method as to whether
 the invoker can provide further input beyond that contained in the given
 input buffer.  If there is a possibility of providing additional input
 then the invoker should pass `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for this parameter; if there
 is no possibility of providing further input then the invoker should
 pass `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  It is not erroneous, and in fact it is quite
 common, to pass `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` in one invocation and later discover that
 no further input was actually available.  It is critical, however, that
 the final invocation of this method in a sequence of invocations always
 pass `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` so that any remaining undecoded input will be treated
 as being malformed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works by invoking the `],
					[/* reference */ 'r', `decodeLoop`],
					[/* text */ 't', `
 method, interpreting its results, handling error conditions, and
 reinvoking it as necessary.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input byte buffer`]
				]],
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output character buffer`]
				]],
				[/* parameter */ 'endOfInput', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if, and only if, the invoker can provide no
         additional input bytes beyond those in the given buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If a decoding operation is already in progress and the previous
          step was an invocation neither of the `],
					[/* reference */ 'r', `reset`],
					[/* text */ 't', `
          method, nor of this method with a value of `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for
          the `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', ` parameter, nor of this method with a
          value of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', ` parameter
          but a return value indicating an incomplete decoding operation`]
				]],
				[/* throw */ 'java.nio.charset.CoderMalfunctionError', [/* throw description */
					[/* text */ 't', `If an invocation of the decodeLoop method threw
          an unexpected exception`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A coder-result object describing the reason for termination`]
			]
		]],
		[/* method */ 'flush(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Flushes this decoder.

 `],
				[/* block */ 'b', ` Some decoders maintain internal state and may need to write some
 final characters to the output buffer once the overall input sequence has
 been read.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Any additional output is written to the output buffer beginning at
 its current position.  At most `],
					[/* external link */ 'a', `../Buffer.html#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 characters will be written.  The buffer's position will be advanced
 appropriately, but its mark and limit will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method completes successfully then it returns `],
					[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', `.  If there is insufficient room in the output
 buffer then it returns `],
					[/* external link */ 'a', `CoderResult.html#OVERFLOW`, `CoderResult.OVERFLOW`],
					[/* text */ 't', `.  If this happens
 then this method must be invoked again, with an output buffer that has
 more room, in order to complete the current `],
					[/* text */ 't', `decoding operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` If this decoder has already been flushed then invoking this method
 has no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `implFlush`],
					[/* text */ 't', ` method to
 perform the actual flushing operation.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output character buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the previous step of the current decoding operation was an
          invocation neither of the `],
					[/* reference */ 'r', `flush`],
					[/* text */ 't', ` method nor of
          the three-argument `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', ` method
          with a value of `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` for the `],
					[/* inline code block */ 'i', `endOfInput`],
					[/* text */ 't', `
          parameter`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A coder-result object, either `],
				[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
				[/* text */ 't', ` or
          `],
				[/* external link */ 'a', `CoderResult.html#OVERFLOW`, `CoderResult.OVERFLOW`]
			]
		]],
		[/* method */ 'charset()', [
			[/* method description */
				[/* text */ 't', `Returns the charset that created this decoder.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This decoder's charset`]
			]
		]],
		[/* method */ 'replacement()', [
			[/* method description */
				[/* text */ 't', `Returns this decoder's replacement value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This decoder's current replacement,
          which is never `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is never empty`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this decoder, clearing any internal state.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method resets charset-independent state and also invokes the
 `],
					[/* reference */ 'r', `implReset`],
					[/* text */ 't', ` method in order to perform any
 charset-specific reset actions.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `This decoder`]
			]
		]],
		[/* method */ 'implFlush(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Flushes this decoder.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method does nothing, and always
 returns `],
					[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', `.  This method should be overridden
 by decoders that may need to write final characters to the output buffer
 once the entire input sequence has been read. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output character buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A coder-result object, either `],
				[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
				[/* text */ 't', ` or
          `],
				[/* external link */ 'a', `CoderResult.html#OVERFLOW`, `CoderResult.OVERFLOW`]
			]
		]],
		[/* method */ 'malformedInputAction()', [
			[/* method description */
				[/* text */ 't', `Returns this decoder's current action for malformed-input errors.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The current malformed-input action, which is never `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'unmappableCharacterAction()', [
			[/* method description */
				[/* text */ 't', `Returns this decoder's current action for unmappable-character errors.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The current unmappable-character action, which is never
         `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'replaceWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Changes this decoder's replacement value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `implReplaceWith`],
					[/* text */ 't', `
 method, passing the new replacement, after checking that the new
 replacement is acceptable.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'newReplacement', [/* parameter description */
					[/* text */ 't', `The new replacement; must not be
         `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, must have non-zero length,

         and must not be longer than the value returned by the
         `],
					[/* reference */ 'r', `maxCharsPerByte`],
					[/* text */ 't', ` method`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameter do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This decoder`]
			]
		]],
		[/* method */ 'implReplaceWith(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Reports a change to this decoder's replacement value.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by decoders that require notification of changes to
 the replacement.  `]
			],
			[/* parameters */
				[/* parameter */ 'newReplacement', [/* parameter description */
					[/* text */ 't', `The replacement value`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'implOnMalformedInput(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Reports a change to this decoder's malformed-input action.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by decoders that require notification of changes to
 the malformed-input action.  `]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Reports a change to this decoder's unmappable-character action.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by decoders that require notification of changes to
 the unmappable-character action.  `]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'implReset()', [
			[/* method description */
				[/* text */ 't', `Resets this decoder, clearing any charset-specific internal state.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by decoders that maintain internal state.  `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'decodeLoop(java.nio.ByteBuffer,java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Decodes one or more bytes into one or more characters.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method encapsulates the basic decoding loop, decoding as many
 bytes as possible until it either runs out of input, runs out of room
 in the output buffer, or encounters a decoding error.  This method is
 invoked by the `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', ` method, which handles result
 interpretation and error recovery.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffers are read from, and written to, starting at their current
 positions.  At most `],
					[/* external link */ 'a', `../Buffer.html#remaining()`, `in.remaining()`],
					[/* text */ 't', ` bytes
 will be read, and at most `],
					[/* external link */ 'a', `../Buffer.html#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 characters will be written.  The buffers' positions will be advanced to
 reflect the bytes read and the characters written, but their marks and
 limits will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns a `],
					[/* reference */ 'r', `java.nio.charset.CoderResult`],
					[/* text */ 't', ` object to describe its
 reason for termination, in the same manner as the `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', `
 method.  Most implementations of this method will handle decoding errors
 by returning an appropriate result object for interpretation by the
 `],
					[/* reference */ 'r', `decode`],
					[/* text */ 't', ` method.  An optimized implementation may instead
 examine the relevant error action and implement that action itself.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation of this method may perform arbitrary lookahead by
 returning `],
					[/* external link */ 'a', `CoderResult.html#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', ` until it receives sufficient
 input.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input byte buffer`]
				]],
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output character buffer`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A coder-result object describing the reason for termination`]
			]
		]],
		[/* method */ 'averageCharsPerByte()', [
			[/* method description */
				[/* text */ 't', `Returns the average number of characters that will be produced for each
 byte of input.  This heuristic value may be used to estimate the size
 of the output buffer required for a given input sequence.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The average number of characters produced
          per byte of input`]
			]
		]],
		[/* method */ 'isAutoDetecting()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this decoder implements an auto-detecting charset.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method always returns
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `; it should be overridden by auto-detecting decoders to
 return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this decoder implements an
          auto-detecting charset`]
			]
		]],
		[/* method */ 'isCharsetDetected()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this decoder has yet detected a
 charset&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this decoder implements an auto-detecting charset then at a
 single point during a decoding operation this method may start returning
 `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` to indicate that a specific charset has been detected in
 the input byte sequence.  Once this occurs, the `],
					[/* reference */ 'r', `detectedCharset`],
					[/* text */ 't', ` method may be invoked to retrieve the detected charset.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` That this method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` does not imply that no bytes
 have yet been decoded.  Some auto-detecting decoders are capable of
 decoding some, or even all, of an input byte sequence without fixing on
 a particular charset.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method always throws an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', `; it should be overridden by
 auto-detecting decoders to return `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` once the input charset
 has been determined.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this decoder does not implement an auto-detecting charset`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this decoder has detected a
          specific charset`]
			]
		]],
		[/* method */ 'detectedCharset()', [
			[/* method description */
				[/* text */ 't', `Retrieves the charset that was detected by this
 decoder&nbsp;&nbsp;`],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this decoder implements an auto-detecting charset then this
 method returns the actual charset once it has been detected.  After that
 point, this method returns the same value for the duration of the
 current decoding operation.  If not enough input bytes have yet been
 read to determine the actual charset then this method throws an `],
					[/* reference */ 'r', `java.lang.IllegalStateException`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method always throws an `],
					[/* reference */ 'r', `java.lang.UnsupportedOperationException`],
					[/* text */ 't', `; it should be overridden by
 auto-detecting decoders to return the appropriate value.  `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If insufficient bytes have been read to determine a charset`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this decoder does not implement an auto-detecting charset`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The charset detected by this auto-detecting decoder,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the charset has not yet been determined`]
			]
		]]
	],
]);
