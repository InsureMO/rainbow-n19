import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.StringCharacterIterator', [
	[/* class description */
		[/* inline code block */ 'i', `StringCharacterIterator`],
		[/* text */ 't', ` implements the
 `],
		[/* inline code block */ 'i', `CharacterIterator`],
		[/* text */ 't', ` protocol for a `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `.
 The `],
		[/* inline code block */ 'i', `StringCharacterIterator`],
		[/* text */ 't', ` class iterates over the
 entire `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an iterator with an initial index of 0.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to be iterated over`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an iterator with the specified initial index.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The String to be iterated over`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `Initial iterator position`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an iterator over the given range of the given string, with the
 index set at the specified position.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The String to be iterated over`]
				]],
				[/* parameter */ 'begin', [/* parameter description */
					[/* text */ 't', `Index of the first character`]
				]],
				[/* parameter */ 'end', [/* parameter description */
					[/* text */ 't', `Index of the character following the last character`]
				]],
				[/* parameter */ 'pos', [/* parameter description */
					[/* text */ 't', `Initial iterator position`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares the equality of two StringCharacterIterator objects.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the StringCharacterIterator object to be compared with.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the given obj is the same as this
 StringCharacterIterator object; false otherwise.`]
			]
		]],
		[/* method */ 'current()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.current() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the character at the current position or DONE if the current
 position is off the end of the text.`]
			]
		]],
		[/* method */ 'first()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.first() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the first character in the text, or DONE if the text is empty`]
			]
		]],
		[/* method */ 'last()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.last() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the last character in the text, or DONE if the text is empty`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.next() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the character at the new position or DONE if the new
 position is off the end of the text range.`]
			]
		]],
		[/* method */ 'previous()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.previous() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the character at the new position or DONE if the current
 position is equal to getBeginIndex().`]
			]
		]],
		[/* method */ 'setIndex(int)', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.setIndex() for String.`]
			],
			[/* parameters */
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `the position within the text.  Valid values range from
 getBeginIndex() to getEndIndex().  An IllegalArgumentException is thrown
 if an invalid value is supplied.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the character at the specified position or DONE if the specified position is equal to getEndIndex()`]
			]
		]],
		[/* method */ 'getBeginIndex()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.getBeginIndex() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index at which the text begins.`]
			]
		]],
		[/* method */ 'getEndIndex()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.getEndIndex() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index after the last character in the text`]
			]
		]],
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Implements CharacterIterator.getIndex() for String.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the current index.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Computes a hashcode for this iterator.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A hash code`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Creates a copy of this iterator.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A copy of this`]
			]
		]],
		[/* method */ 'setText(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Reset this iterator to point to a new string.  This package-visible
 method is used by other java.text classes that want to avoid allocating
 new StringCharacterIterator objects every time their setText method
 is called.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `The String to be iterated over`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
