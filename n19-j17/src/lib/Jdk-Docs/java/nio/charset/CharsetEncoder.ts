import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.charset.CharsetEncoder', [
	[/* class description */
		[/* text */ 't', `An engine that can transform a sequence of sixteen-bit Unicode characters into a sequence of
 bytes in a specific charset.

 `],
		[/* anchor */ 'r', '#-id', `steps`, ``],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The input character sequence is provided in a character buffer or a series
 of such buffers.  The output byte sequence is written to a byte buffer
 or a series of such buffers.  An encoder should always be used by making
 the following sequence of method invocations, hereinafter referred to as an
 `],
			[/* text */ 't', `encoding operation`],
			[/* text */ 't', `:

 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Reset the encoder via the `],
					[/* reference */ 'r', `#reset()`, `reset`],
					[/* text */ 't', ` method, unless it
   has not been used before; `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` Invoke the `],
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
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
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
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
					[/* reference */ 'r', `#flush(java.nio.ByteBuffer)`, `flush`],
					[/* text */ 't', ` method so that the encoder can
   flush any internal state to the output buffer. `]
				]]
			]]
		]],
		[/* text */ 't', `

 Each invocation of the `],
		[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
		[/* text */ 't', ` method will encode as many
 characters as possible from the input buffer, writing the resulting bytes
 to the output buffer.  The `],
		[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
		[/* text */ 't', ` method returns when more
 input is required, when there is not enough room in the output buffer, or
 when an encoding error has occurred.  In each case a `],
		[/* reference */ 'r', `java.nio.charset.CoderResult`, `CoderResult`],
		[/* text */ 't', `
 object is returned to describe the reason for termination.  An invoker can
 examine this object and fill the input buffer, flush the output buffer, or
 attempt to recover from an encoding error, as appropriate, and try again.

 `],
		[/* anchor */ 'r', '#-id', `ce`, ``],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` There are two general types of encoding errors.  If the input character
 sequence is not a legal sixteen-bit Unicode sequence then the input is considered `],
			[/* text */ 't', `malformed`],
			[/* text */ 't', `.  If
 the input character sequence is legal but cannot be mapped to a valid
 byte sequence in the given charset then an `],
			[/* text */ 't', `unmappable character`],
			[/* text */ 't', ` has been encountered.

 `],
			[/* anchor */ 'r', '#-id', `cae`, ``],
			[/* text */ 't', `

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` How an encoding error is handled depends upon the action requested for
 that type of error, which is described by an instance of the `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction`, `CodingErrorAction`],
			[/* text */ 't', ` class.  The possible error actions are to `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction#IGNORE`, `ignore`],
			[/* text */ 't', ` the erroneous input, `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `report`],
			[/* text */ 't', ` the error to the invoker via
 the returned `],
			[/* reference */ 'r', `java.nio.charset.CoderResult`, `CoderResult`],
			[/* text */ 't', ` object, or `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPLACE`, `replace`],
			[/* text */ 't', ` the erroneous input with the current value of the
 replacement byte array.  The replacement


 is initially set to the encoder's default replacement, which often
 (but not always) has the initial value `],
			[/* inline code block */ 'i', `{`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `(byte)'?'`],
			[/* text */ 't', ` `],
			[/* inline code block */ 'i', `}`],
			[/* text */ 't', `;





 its value may be changed via the `],
			[/* reference */ 'r', `#replaceWith(byte%5B%5D)`, `replaceWith`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` The default action for malformed-input and unmappable-character errors
 is to `],
			[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `report`],
			[/* text */ 't', ` them.  The
 malformed-input error action may be changed via the `],
			[/* reference */ 'r', `#onMalformedInput(java.nio.charset.CodingErrorAction)`, `onMalformedInput`],
			[/* text */ 't', ` method; the
 unmappable-character action may be changed via the `],
			[/* reference */ 'r', `#onUnmappableCharacter(java.nio.charset.CodingErrorAction)`, `onUnmappableCharacter`],
			[/* text */ 't', ` method.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` This class is designed to handle many of the details of the encoding
 process, including the implementation of error actions.  An encoder for a
 specific charset, which is a concrete subclass of this class, need only
 implement the abstract `],
			[/* reference */ 'r', `#encodeLoop(java.nio.CharBuffer,java.nio.ByteBuffer)`, `encodeLoop`],
			[/* text */ 't', ` method, which
 encapsulates the basic encoding loop.  A subclass that maintains internal
 state should, additionally, override the `],
			[/* reference */ 'r', `#implFlush(java.nio.ByteBuffer)`, `implFlush`],
			[/* text */ 't', ` and
 `],
			[/* reference */ 'r', `#implReset()`, `implReset`],
			[/* text */ 't', ` methods.

 `]
		]],
		[/* block */ 'b', ` Instances of this class are not safe for use by multiple concurrent
 threads.  `]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.nio.charset.Charset,float,float)', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new encoder.  The new encoder will have the given
 bytes-per-char values and its replacement will be the
 byte array `],
				[/* inline code block */ 'i', `{`],
				[/* text */ 't', ` `],
				[/* inline code block */ 'i', `(byte)'?'`],
				[/* text */ 't', ` `],
				[/* inline code block */ 'i', `}`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The charset that created this encoder`]
				]],
				[/* parameter */ 'averageBytesPerChar', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the expected number of
         bytes that will be produced for each input character`]
				]],
				[/* parameter */ 'maxBytesPerChar', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the maximum number of
         bytes that will be produced for each input character`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameters do not hold`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.nio.charset.Charset,float,float,byte[])', [
			[/* constructor description */
				[/* text */ 't', `Initializes a new encoder.  The new encoder will have the given
 bytes-per-char and replacement values.`]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The charset that created this encoder`]
				]],
				[/* parameter */ 'averageBytesPerChar', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the expected number of
         bytes that will be produced for each input character`]
				]],
				[/* parameter */ 'maxBytesPerChar', [/* parameter description */
					[/* text */ 't', `A positive float value indicating the maximum number of
         bytes that will be produced for each input character`]
				]],
				[/* parameter */ 'replacement', [/* parameter description */
					[/* text */ 't', `The initial replacement; must not be `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, must have
         non-zero length, must not be longer than maxBytesPerChar,
         and must be `],
					[/* reference */ 'r', `#isLegalReplacement(byte%5B%5D)`, `legal`]
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
		[/* method */ 'encodeLoop(java.nio.CharBuffer,java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Encodes one or more characters into one or more bytes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method encapsulates the basic encoding loop, encoding as many
 characters as possible until it either runs out of input, runs out of room
 in the output buffer, or encounters an encoding error.  This method is
 invoked by the `],
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
					[/* text */ 't', ` method, which handles result
 interpretation and error recovery.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffers are read from, and written to, starting at their current
 positions.  At most `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `in.remaining()`],
					[/* text */ 't', ` characters
 will be read, and at most `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 bytes will be written.  The buffers' positions will be advanced to
 reflect the characters read and the bytes written, but their marks and
 limits will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns a `],
					[/* reference */ 'r', `java.nio.charset.CoderResult`, `CoderResult`],
					[/* text */ 't', ` object to describe its
 reason for termination, in the same manner as the `],
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
					[/* text */ 't', `
 method.  Most implementations of this method will handle encoding errors
 by returning an appropriate result object for interpretation by the
 `],
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
					[/* text */ 't', ` method.  An optimized implementation may instead
 examine the relevant error action and implement that action itself.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` An implementation of this method may perform arbitrary lookahead by
 returning `],
					[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', ` until it receives sufficient
 input.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input character buffer`]
				]],
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output byte buffer`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `A coder-result object describing the reason for termination`]
			]
		]],
		[/* method */ 'implFlush(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Flushes this encoder.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The default implementation of this method does nothing, and always
 returns `],
					[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', `.  This method should be overridden
 by encoders that may need to write final bytes to the output buffer
 once the entire input sequence has been read. `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output byte buffer`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `A coder-result object, either `],
				[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
				[/* text */ 't', ` or
          `],
				[/* reference */ 'r', `java.nio.charset.CoderResult#OVERFLOW`, `CoderResult.OVERFLOW`]
			]
		]],
		[/* method */ 'implOnMalformedInput(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Reports a change to this encoder's malformed-input action.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by encoders that require notification of changes to
 the malformed-input action.  `]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Reports a change to this encoder's unmappable-character action.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by encoders that require notification of changes to
 the unmappable-character action.  `]
			],
			[/* parameters */
				[/* parameter */ 'newAction', [/* parameter description */
					[/* text */ 't', `The new action`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'implReplaceWith(byte[])', [
			[/* method description */
				[/* text */ 't', `Reports a change to this encoder's replacement value.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by encoders that require notification of changes to
 the replacement.  `]
			],
			[/* parameters */
				[/* parameter */ 'newReplacement', [/* parameter description */
					[/* text */ 't', `The replacement value`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'implReset()', [
			[/* method description */
				[/* text */ 't', `Resets this encoder, clearing any charset-specific internal state.

 `],
				[/* block */ 'b', ` The default implementation of this method does nothing.  This method
 should be overridden by encoders that maintain internal state.  `]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'canEncode(char)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this encoder can encode the given character.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` if the given character is a
 surrogate character; such characters can be interpreted only when they
 are members of a pair consisting of a high surrogate followed by a low
 surrogate.  The `],
					[/* reference */ 'r', `#canEncode(java.lang.CharSequence)`, `canEncode(CharSequence)`],
					[/* text */ 't', ` method may be used to test whether or not a
 character sequence can be encoded.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method may modify this encoder's state; it should therefore not
 be invoked if an `],
					[/* text */ 't', `encoding operation`],
					[/* text */ 't', ` is already in
 progress.

 `]
				]],
				[/* block */ 'b', ` The default implementation of this method is not very efficient; it
 should generally be overridden to improve performance.  `]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The given character`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If an encoding operation is already in progress`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this encoder can encode
          the given character`]
			]
		]],
		[/* method */ 'canEncode(java.lang.CharSequence)', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this encoder can encode the given character
 sequence.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method returns `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', ` for a particular character
 sequence then more information about why the sequence cannot be encoded
 may be obtained by performing a full `],
					[/* text */ 't', `encoding operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` This method may modify this encoder's state; it should therefore not
 be invoked if an encoding operation is already in progress.

 `],
				[/* block */ 'b', ` The default implementation of this method is not very efficient; it
 should generally be overridden to improve performance.  `]
			],
			[/* parameters */
				[/* parameter */ 'cs', [/* parameter description */
					[/* text */ 't', `The given character sequence`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If an encoding operation is already in progress`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this encoder can encode
          the given character without throwing any exceptions and without
          performing any replacements`]
			]
		]],
		[/* method */ 'isLegalReplacement(byte[])', [
			[/* method description */
				[/* text */ 't', `Tells whether or not the given byte array is a legal replacement value
 for this encoder.

 `],
				[/* block */ 'b', ` A replacement is legal if, and only if, it is a legal sequence of
 bytes in this encoder's charset; that is, it must be possible to decode
 the replacement into one or more sixteen-bit Unicode characters.

 `],
				[/* block */ 'b', ` The default implementation of this method is not very efficient; it
 should generally be overridden to improve performance.  `]
			],
			[/* parameters */
				[/* parameter */ 'repl', [/* parameter description */
					[/* text */ 't', `The byte array to be tested`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the given byte array
          is a legal replacement value for this encoder`]
			]
		]],
		[/* method */ 'replacement()', [
			[/* method description */
				[/* text */ 't', `Returns this encoder's replacement value.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `This encoder's current replacement,
          which is never `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and is never empty`]
			]
		]],
		[/* method */ 'averageBytesPerChar()', [
			[/* method description */
				[/* text */ 't', `Returns the average number of bytes that will be produced for each
 character of input.  This heuristic value may be used to estimate the size
 of the output buffer required for a given input sequence.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The average number of bytes produced
          per character of input`]
			]
		]],
		[/* method */ 'maxBytesPerChar()', [
			[/* method description */
				[/* text */ 't', `Returns the maximum number of bytes that will be produced for each
 character of input.  This value may be used to compute the worst-case size
 of the output buffer required for a given input sequence. This value
 accounts for any necessary content-independent prefix or suffix

 bytes, such as byte-order marks.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The maximum number of bytes that will be produced per
          character of input`]
			]
		]],
		[/* method */ 'encode(java.nio.CharBuffer)', [
			[/* method description */
				[/* text */ 't', `Convenience method that encodes the remaining content of a single input
 character buffer into a newly-allocated byte buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method implements an entire `],
					[/* text */ 't', `encoding operation`],
					[/* text */ 't', `; that is, it resets this encoder, then it encodes the
 characters in the given character buffer, and finally it flushes this
 encoder.  This method should therefore not be invoked if an encoding
 operation is already in progress.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input character buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If an encoding operation is already in progress`]
				]],
				[/* throw */ 'java.nio.charset.MalformedInputException', [/* throw description */
					[/* text */ 't', `If the character sequence starting at the input buffer's current
          position is not a legal sixteen-bit Unicode sequence and the current malformed-input action
          is `],
					[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `CodingErrorAction.REPORT`]
				]],
				[/* throw */ 'java.nio.charset.UnmappableCharacterException', [/* throw description */
					[/* text */ 't', `If the character sequence starting at the input buffer's current
          position cannot be mapped to an equivalent byte sequence and
          the current unmappable-character action is `],
					[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `CodingErrorAction.REPORT`]
				]],
				[/* throw */ 'java.nio.charset.CharacterCodingException', UDF]
			],
			[/* return description */
				[/* text */ 't', `A newly-allocated byte buffer containing the result of the
         encoding operation.  The buffer's position will be zero and its
         limit will follow the last byte written.`]
			]
		]],
		[/* method */ 'charset()', [
			[/* method description */
				[/* text */ 't', `Returns the charset that created this encoder.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `This encoder's charset`]
			]
		]],
		[/* method */ 'onMalformedInput(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Changes this encoder's action for malformed-input errors.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `#implOnMalformedInput(java.nio.charset.CodingErrorAction)`, `implOnMalformedInput`],
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
				[/* text */ 't', `This encoder`]
			]
		]],
		[/* method */ 'onUnmappableCharacter(java.nio.charset.CodingErrorAction)', [
			[/* method description */
				[/* text */ 't', `Changes this encoder's action for unmappable-character errors.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `#implOnUnmappableCharacter(java.nio.charset.CodingErrorAction)`, `implOnUnmappableCharacter`],
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
				[/* text */ 't', `This encoder`]
			]
		]],
		[/* method */ 'replaceWith(byte[])', [
			[/* method description */
				[/* text */ 't', `Changes this encoder's replacement value.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `#implReplaceWith(byte%5B%5D)`, `implReplaceWith`],
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





         must not be longer than the value returned by the
         `],
					[/* reference */ 'r', `#maxBytesPerChar()`, `maxBytesPerChar`],
					[/* text */ 't', ` method, and
         must be `],
					[/* reference */ 'r', `#isLegalReplacement(byte%5B%5D)`, `legal`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the preconditions on the parameter do not hold`]
				]]
			],
			[/* return description */
				[/* text */ 't', `This encoder`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this encoder, clearing any internal state.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method resets charset-independent state and also invokes the
 `],
					[/* reference */ 'r', `#implReset()`, `implReset`],
					[/* text */ 't', ` method in order to perform any
 charset-specific reset actions.  `]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `This encoder`]
			]
		]],
		[/* method */ 'encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)', [
			[/* method description */
				[/* text */ 't', `Encodes as many characters as possible from the given input buffer,
 writing the results to the given output buffer.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The buffers are read from, and written to, starting at their current
 positions.  At most `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `in.remaining()`],
					[/* text */ 't', ` characters
 will be read and at most `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 bytes will be written.  The buffers' positions will be advanced to
 reflect the characters read and the bytes written, but their marks and
 limits will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` In addition to reading characters from the input buffer and writing
 bytes to the output buffer, this method returns a `],
					[/* reference */ 'r', `java.nio.charset.CoderResult`, `CoderResult`],
					[/* text */ 't', `
 object to describe its reason for termination:

 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
							[/* text */ 't', ` indicates that as much of the
   input buffer as possible has been encoded.  If there is no further
   input then the invoker can proceed to the next step of the
   `],
							[/* text */ 't', `encoding operation`],
							[/* text */ 't', `.  Otherwise this method
   should be invoked again with further input.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#OVERFLOW`, `CoderResult.OVERFLOW`],
							[/* text */ 't', ` indicates that there is
   insufficient space in the output buffer to encode any more characters.
   This method should be invoked again with an output buffer that has
   more `],
							[/* reference */ 'r', `java.nio.Buffer#remaining()`, `remaining`],
							[/* text */ 't', ` bytes. This is
   typically done by draining any encoded bytes from the output
   buffer.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` A `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#malformedForLength(int)`, `malformed-input`],
							[/* text */ 't', ` result indicates that a malformed-input
   error has been detected.  The malformed characters begin at the input
   buffer's (possibly incremented) position; the number of malformed
   characters may be determined by invoking the result object's `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#length()`, `length`],
							[/* text */ 't', ` method.  This case applies only if the
   `],
							[/* reference */ 'r', `#onMalformedInput(java.nio.charset.CodingErrorAction)`, `malformed action`],
							[/* text */ 't', ` of this encoder
   is `],
							[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `CodingErrorAction.REPORT`],
							[/* text */ 't', `; otherwise the malformed input
   will be ignored or replaced, as requested.  `]
						]]
					]],
					[/* block */ 'b', [
						[/* block */ 'b', [
							[/* text */ 't', ` An `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#unmappableForLength(int)`, `unmappable-character`],
							[/* text */ 't', ` result indicates that an
   unmappable-character error has been detected.  The characters that
   encode the unmappable character begin at the input buffer's (possibly
   incremented) position; the number of such characters may be determined
   by invoking the result object's `],
							[/* reference */ 'r', `java.nio.charset.CoderResult#length()`, `length`],
							[/* text */ 't', `
   method.  This case applies only if the `],
							[/* reference */ 'r', `#onUnmappableCharacter(java.nio.charset.CodingErrorAction)`, `unmappable action`],
							[/* text */ 't', ` of this encoder is `],
							[/* reference */ 'r', `java.nio.charset.CodingErrorAction#REPORT`, `CodingErrorAction.REPORT`],
							[/* text */ 't', `; otherwise the unmappable character will be
   ignored or replaced, as requested.  `]
						]]
					]]
				]],
				[/* text */ 't', `

 In any case, if this method is to be reinvoked in the same encoding
 operation then care should be taken to preserve any characters remaining
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
					[/* text */ 't', ` so that any remaining unencoded input will be treated
 as being malformed.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` This method works by invoking the `],
					[/* reference */ 'r', `#encodeLoop(java.nio.CharBuffer,java.nio.ByteBuffer)`, `encodeLoop`],
					[/* text */ 't', `
 method, interpreting its results, handling error conditions, and
 reinvoking it as necessary.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `The input character buffer`]
				]],
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output byte buffer`]
				]],
				[/* parameter */ 'endOfInput', [/* parameter description */
					[/* text */ 't', ``],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if, and only if, the invoker can provide no
         additional input characters beyond those in the given buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If an encoding operation is already in progress and the previous
          step was an invocation neither of the `],
					[/* reference */ 'r', `#reset()`, `reset`],
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
          but a return value indicating an incomplete encoding operation`]
				]],
				[/* throw */ 'java.nio.charset.CoderMalfunctionError', [/* throw description */
					[/* text */ 't', `If an invocation of the encodeLoop method threw
          an unexpected exception`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A coder-result object describing the reason for termination`]
			]
		]],
		[/* method */ 'flush(java.nio.ByteBuffer)', [
			[/* method description */
				[/* text */ 't', `Flushes this encoder.

 `],
				[/* block */ 'b', ` Some encoders maintain internal state and may need to write some
 final bytes to the output buffer once the overall input sequence has
 been read.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Any additional output is written to the output buffer beginning at
 its current position.  At most `],
					[/* reference */ 'r', `java.nio.Buffer#remaining()`, `out.remaining()`],
					[/* text */ 't', `
 bytes will be written.  The buffer's position will be advanced
 appropriately, but its mark and limit will not be modified.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If this method completes successfully then it returns `],
					[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
					[/* text */ 't', `.  If there is insufficient room in the output
 buffer then it returns `],
					[/* reference */ 'r', `java.nio.charset.CoderResult#OVERFLOW`, `CoderResult.OVERFLOW`],
					[/* text */ 't', `.  If this happens
 then this method must be invoked again, with an output buffer that has
 more room, in order to complete the current `],
					[/* text */ 't', `encoding operation`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', ` If this encoder has already been flushed then invoking this method
 has no effect.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method invokes the `],
					[/* reference */ 'r', `#implFlush(java.nio.ByteBuffer)`, `implFlush`],
					[/* text */ 't', ` method to
 perform the actual flushing operation.  `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `The output byte buffer`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `If the previous step of the current encoding operation was an
          invocation neither of the `],
					[/* reference */ 'r', `#flush(java.nio.ByteBuffer)`, `flush`],
					[/* text */ 't', ` method nor of
          the three-argument `],
					[/* reference */ 'r', `#encode(java.nio.CharBuffer,java.nio.ByteBuffer,boolean)`, `encode`],
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
				[/* reference */ 'r', `java.nio.charset.CoderResult#UNDERFLOW`, `CoderResult.UNDERFLOW`],
				[/* text */ 't', ` or
          `],
				[/* reference */ 'r', `java.nio.charset.CoderResult#OVERFLOW`, `CoderResult.OVERFLOW`]
			]
		]],
		[/* method */ 'malformedInputAction()', [
			[/* method description */
				[/* text */ 't', `Returns this encoder's current action for malformed-input errors.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The current malformed-input action, which is never `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'unmappableCharacterAction()', [
			[/* method description */
				[/* text */ 't', `Returns this encoder's current action for unmappable-character errors.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The current unmappable-character action, which is never
         `],
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
	/* enum values */ UDF
]);
