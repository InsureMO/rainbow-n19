import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.charset.CoderResult', [
	[/* class description */
		[/* text */ 't', `A description of the result state of a coder.

 `],
		[/* block */ 'b', ` A charset coder, that is, either a decoder or an encoder, consumes bytes
 (or characters) from an input buffer, translates them, and writes the
 resulting characters (or bytes) to an output buffer.  A coding process
 terminates for one of four categories of reasons, which are described by
 instances of this class:

 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* text */ 't', `Underflow`],
					[/* text */ 't', ` is reported when there is no more input to be
   processed, or there is insufficient input and additional input is
   required.  This condition is represented by the unique result object
   `],
					[/* text */ 't', `UNDERFLOW`],
					[/* text */ 't', `, whose `],
					[/* reference */ 'r', `#isUnderflow()`, `isUnderflow`],
					[/* text */ 't', ` method
   returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` `],
					[/* text */ 't', `Overflow`],
					[/* text */ 't', ` is reported when there is insufficient room
   remaining in the output buffer.  This condition is represented by the
   unique result object `],
					[/* text */ 't', `OVERFLOW`],
					[/* text */ 't', `, whose `],
					[/* reference */ 'r', `#isOverflow()`, `isOverflow`],
					[/* text */ 't', ` method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` A `],
					[/* text */ 't', `malformed-input error`],
					[/* text */ 't', ` is reported when a sequence of
   input units is not well-formed.  Such errors are described by instances of
   this class whose `],
					[/* reference */ 'r', `#isMalformed()`, `isMalformed`],
					[/* text */ 't', ` method returns
   `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and whose `],
					[/* reference */ 'r', `#length()`, `length`],
					[/* text */ 't', ` method returns the length
   of the malformed sequence.  There is one unique instance of this class for
   all malformed-input errors of a given length.  `]
				]]
			]],
			[/* block */ 'b', [
				[/* block */ 'b', [
					[/* text */ 't', ` An `],
					[/* text */ 't', `unmappable-character error`],
					[/* text */ 't', ` is reported when a sequence
   of input units denotes a character that cannot be represented in the
   output charset.  Such errors are described by instances of this class
   whose `],
					[/* reference */ 'r', `#isUnmappable()`, `isUnmappable`],
					[/* text */ 't', ` method returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` and
   whose `],
					[/* reference */ 'r', `#length()`, `length`],
					[/* text */ 't', ` method returns the length of the input
   sequence denoting the unmappable character.  There is one unique instance
   of this class for all unmappable-character errors of a given length.
   `]
				]]
			]]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` For convenience, the `],
			[/* reference */ 'r', `#isError()`, `isError`],
			[/* text */ 't', ` method returns `],
			[/* inline code block */ 'i', `true`],
			[/* text */ 't', `
 for result objects that describe malformed-input and unmappable-character
 errors but `],
			[/* inline code block */ 'i', `false`],
			[/* text */ 't', ` for those that describe underflow or overflow
 conditions.  `]
		]]
	],
	[/* fields */
		[/* field */ 'OVERFLOW', [
			[/* field description */
				[/* text */ 't', `Result object indicating overflow, meaning that there is insufficient
 room in the output buffer.`]
			],
		]],
		[/* field */ 'UNDERFLOW', [
			[/* field description */
				[/* text */ 't', `Result object indicating underflow, meaning that either the input buffer
 has been completely consumed or, if the input buffer is not yet empty,
 that additional input is required.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'isError()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object describes an error condition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this object denotes either a
          malformed-input error or an unmappable-character error`]
			]
		]],
		[/* method */ 'isMalformed()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object describes a malformed-input error.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this object denotes a
          malformed-input error`]
			]
		]],
		[/* method */ 'isOverflow()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object describes an overflow condition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this object denotes overflow`]
			]
		]],
		[/* method */ 'isUnderflow()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object describes an underflow condition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this object denotes underflow`]
			]
		]],
		[/* method */ 'isUnmappable()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this object describes an unmappable-character
 error.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this object denotes an
          unmappable-character error`]
			]
		]],
		[/* method */ 'length()', [
			[/* method description */
				[/* text */ 't', `Returns the length of the erroneous input described by this
 object  `],
				[/* text */ 't', `(optional operation)`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `If this object does not describe an error condition, that is,
          if the `],
					[/* reference */ 'r', `#isError()`, `isError`],
					[/* text */ 't', ` does not return `],
					[/* inline code block */ 'i', `true`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The length of the erroneous input, a positive integer`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this coder result.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A descriptive string`]
			]
		]],
		[/* method */ 'malformedForLength(int)', [
			[/* method description */
				[/* text */ 't', `Static factory method that returns the unique object describing a
 malformed-input error of the given length.`]
			],
			[/* parameters */
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The given length`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The requested coder-result object`]
			]
		]],
		[/* method */ 'unmappableForLength(int)', [
			[/* method description */
				[/* text */ 't', `Static factory method that returns the unique result object describing
 an unmappable-character error of the given length.`]
			],
			[/* parameters */
				[/* parameter */ 'length', [/* parameter description */
					[/* text */ 't', `The given length`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The requested coder-result object`]
			]
		]],
		[/* method */ 'throwException()', [
			[/* method description */
				[/* text */ 't', `Throws an exception appropriate to the result described by this object.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.BufferUnderflowException', [/* throw description */
					[/* text */ 't', `If this object is `],
					[/* text */ 't', `UNDERFLOW`]
				]],
				[/* throw */ 'java.nio.BufferOverflowException', [/* throw description */
					[/* text */ 't', `If this object is `],
					[/* text */ 't', `OVERFLOW`]
				]],
				[/* throw */ 'java.nio.charset.MalformedInputException', [/* throw description */
					[/* text */ 't', `If this object represents a malformed-input error; the
          exception's length value will be that of this object`]
				]],
				[/* throw */ 'java.nio.charset.UnmappableCharacterException', [/* throw description */
					[/* text */ 't', `If this object represents an unmappable-character error; the
          exceptions length value will be that of this object`]
				]],
				[/* throw */ 'java.nio.charset.CharacterCodingException', UDF]
			],
			/* return */ UDF
		]]
	],
]);
