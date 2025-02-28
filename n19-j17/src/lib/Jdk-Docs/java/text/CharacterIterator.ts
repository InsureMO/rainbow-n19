import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.CharacterIterator', [
	[/* class description */
		[/* text */ 't', `This interface defines a protocol for bidirectional iteration over text.
 The iterator iterates over a bounded sequence of characters.  Characters
 are indexed with values beginning with the value returned by getBeginIndex() and
 continuing through the value returned by getEndIndex()-1.
 `],
		[/* block */ 'b', `
 Iterators maintain a current character index, whose valid range is from
 getBeginIndex() to getEndIndex(); the value getEndIndex() is included to allow
 handling of zero-length text ranges and for historical reasons.
 The current index can be retrieved by calling getIndex() and set directly
 by calling setIndex(), first(), and last().
 `],
		[/* block */ 'b', `
 The methods previous() and next() are used for iteration. They return DONE if
 they would move outside the range from getBeginIndex() to getEndIndex() -1,
 signaling that the iterator has reached the end of the sequence. DONE is
 also returned by other methods to indicate that the current index is
 outside this range.

 `],
		[/* block */ 'b', `Examples:`],
		[/* block */ 'b', `

 Traverse the text from start to finish
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `public void traverseForward(CharacterIterator iter) {
     for(char c = iter.first(); c != CharacterIterator.DONE; c = iter.next()) {
         processChar(c);
     }
 }`]
		]],
		[/* text */ 't', `

 Traverse the text backwards, from end to start
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `public void traverseBackward(CharacterIterator iter) {
     for(char c = iter.last(); c != CharacterIterator.DONE; c = iter.previous()) {
         processChar(c);
     }
 }`]
		]],
		[/* text */ 't', `

 Traverse both forward and backward from a given position in the text.
 Calls to notBoundary() in this example represents some
 additional stopping criteria.
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `public void traverseOut(CharacterIterator iter, int pos) {
     for (char c = iter.setIndex(pos);
              c != CharacterIterator.DONE && notBoundary(c);
              c = iter.next()) {
     }
     int end = iter.getIndex();
     for (char c = iter.setIndex(pos);
             c != CharacterIterator.DONE && notBoundary(c);
             c = iter.previous()) {
     }
     int start = iter.getIndex();
     processSection(start, end);
 }`]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'DONE', [
			[/* field description */
				[/* text */ 't', `Constant that is returned when the iterator has reached either the end
 or the beginning of the text. The value is '\\\\uFFFF', the "not a
 character" value which should not occur in any valid Unicode string.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Create a copy of this iterator`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A copy of this`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Increments the iterator's index by one and returns the character
 at the new index.  If the resulting index is greater or equal
 to getEndIndex(), the current index is reset to getEndIndex() and
 a value of DONE is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character at the new position or DONE if the new
 position is off the end of the text range.`]
			]
		]],
		[/* method */ 'last()', [
			[/* method description */
				[/* text */ 't', `Sets the position to getEndIndex()-1 (getEndIndex() if the text is empty)
 and returns the character at that position.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the last character in the text, or DONE if the text is empty`]
			]
		]],
		[/* method */ 'first()', [
			[/* method description */
				[/* text */ 't', `Sets the position to getBeginIndex() and returns the character at that
 position.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the first character in the text, or DONE if the text is empty`]
			]
		]],
		[/* method */ 'current()', [
			[/* method description */
				[/* text */ 't', `Gets the character at the current position (as returned by getIndex()).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character at the current position or DONE if the current
 position is off the end of the text.`]
			]
		]],
		[/* method */ 'previous()', [
			[/* method description */
				[/* text */ 't', `Decrements the iterator's index by one and returns the character
 at the new index. If the current index is getBeginIndex(), the index
 remains at getBeginIndex() and a value of DONE is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character at the new position or DONE if the current
 position is equal to getBeginIndex().`]
			]
		]],
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the current index.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current index.`]
			]
		]],
		[/* method */ 'setIndex(int)', [
			[/* method description */
				[/* text */ 't', `Sets the position to the specified position in the text and returns that
 character.`]
			],
			[/* parameters */
				[/* parameter */ 'position', [/* parameter description */
					[/* text */ 't', `the position within the text.  Valid values range from
 getBeginIndex() to getEndIndex().  An IllegalArgumentException is thrown
 if an invalid value is supplied.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the character at the specified position or DONE if the specified position is equal to getEndIndex()`]
			]
		]],
		[/* method */ 'getBeginIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the start index of the text.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index at which the text begins.`]
			]
		]],
		[/* method */ 'getEndIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the end index of the text.  This index is the index of the first
 character following the end of the text.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index after the last character in the text`]
			]
		]]
	],
]);
