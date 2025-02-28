import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.CollationElementIterator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `CollationElementIterator`],
		[/* text */ 't', ` class is used as an iterator
 to walk through each character of an international string. Use the iterator
 to return the ordering priority of the positioned character. The ordering
 priority of a character, which we refer to as a key, defines how a character
 is collated in the given collation object.

 `],
		[/* block */ 'b', `
 For example, consider the following in Spanish:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` "ca" → the first key is key('c') and second key is key('a').
 "cha" → the first key is key('ch') and second key is key('a').
 `]
		]],
		[/* text */ 't', `
 And in German,
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', ` "äb" → the first key is key('a'), the second key is key('e'), and
 the third key is key('b').
 `]
		]],
		[/* text */ 't', `
 The key of a character is an integer composed of primary order(short),
 secondary order(byte), and tertiary order(byte). Java strictly defines
 the size and signedness of its primitive data types. Therefore, the static
 functions `],
		[/* inline code block */ 'i', `primaryOrder`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `secondaryOrder`],
		[/* text */ 't', `, and
 `],
		[/* inline code block */ 'i', `tertiaryOrder`],
		[/* text */ 't', ` return `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', `,
 and `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', ` respectively to ensure the correctness of the key
 value.

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Example of the iterator usage,
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `
  String testString = "This is a test";
  Collator col = Collator.getInstance();
  if (col instanceof RuleBasedCollator) {
      RuleBasedCollator ruleBasedCollator = (RuleBasedCollator)col;
      CollationElementIterator collationElementIterator = ruleBasedCollator.getCollationElementIterator(testString);
      int primaryOrder = CollationElementIterator.primaryOrder(collationElementIterator.next());
          :
  }
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* inline code block */ 'i', `CollationElementIterator.next`],
			[/* text */ 't', ` returns the collation order
 of the next character. A collation order consists of primary order,
 secondary order and tertiary order. The data type of the collation
 order is `],
			[/* text */ 't', `int`],
			[/* text */ 't', `. The first 16 bits of a collation order
 is its primary order; the next 8 bits is the secondary order and the
 last 8 bits is the tertiary order.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Note:`],
			[/* inline code block */ 'i', `CollationElementIterator`],
			[/* text */ 't', ` is a part of
 `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', ` implementation. It is only usable
 with `],
			[/* inline code block */ 'i', `RuleBasedCollator`],
			[/* text */ 't', ` instances.`]
		]]
	],
	[/* fields */
		[/* field */ 'NULLORDER', [
			[/* field description */
				[/* text */ 't', `Null order which indicates the end of string is reached by the
 cursor.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Get the next collation element in the string.  `],
				[/* block */ 'b', `This iterator iterates
 over a sequence of collation elements that were built from the string.
 Because there isn't necessarily a one-to-one mapping from characters to
 collation elements, this doesn't mean the same thing as "return the
 collation element [or ordering priority] of the next character in the
 string".`],
				[/* block */ 'b', `This function returns the collation element that the iterator is currently
 pointing to and then updates the internal pointer to point to the next element.
 previous() updates the pointer first and then returns the element.  This
 means that when you change direction while iterating (i.e., call next() and
 then call previous(), or call previous() and then call next()), you'll get
 back the same element twice.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the next collation element`]
			]
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets the cursor to the beginning of the string.  The next call
 to next() will return the first collation element in the string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'previous()', [
			[/* method description */
				[/* text */ 't', `Get the previous collation element in the string.  `],
				[/* block */ 'b', `This iterator iterates
 over a sequence of collation elements that were built from the string.
 Because there isn't necessarily a one-to-one mapping from characters to
 collation elements, this doesn't mean the same thing as "return the
 collation element [or ordering priority] of the previous character in the
 string".`],
				[/* block */ 'b', `This function updates the iterator's internal pointer to point to the
 collation element preceding the one it's currently pointing to and then
 returns that element, while next() returns the current element and then
 updates the pointer.  This means that when you change direction while
 iterating (i.e., call next() and then call previous(), or call previous()
 and then call next()), you'll get back the same element twice.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the previous collation element`]
			]
		]],
		[/* method */ 'getOffset()', [
			[/* method description */
				[/* text */ 't', `Returns the character offset in the original text corresponding to the next
 collation element.  (That is, getOffset() returns the position in the text
 corresponding to the collation element that will be returned by the next
 call to next().)  This value will always be the index of the FIRST character
 corresponding to the collation element (a contracting character sequence is
 when two or more characters all correspond to the same collation element).
 This means if you do setOffset(x) followed immediately by getOffset(), getOffset()
 won't necessarily return x.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The character offset in the original text corresponding to the collation
 element that will be returned by the next call to next().`]
			]
		]],
		[/* method */ 'setOffset(int)', [
			[/* method description */
				[/* text */ 't', `Sets the iterator to point to the collation element corresponding to
 the specified character (the parameter is a CHARACTER offset in the
 original string, not an offset into its corresponding sequence of
 collation elements).  The value returned by the next call to next()
 will be the collation element corresponding to the specified position
 in the text.  If that position is in the middle of a contracting
 character sequence, the result of the next call to next() is the
 collation element for that sequence.  This means that getOffset()
 is not guaranteed to return the same value as was passed to a preceding
 call to setOffset().`]
			],
			[/* parameters */
				[/* parameter */ 'newOffset', [/* parameter description */
					[/* text */ 't', `The new character offset into the original text.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setText(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set a new string over which to iterate.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the new source text`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setText(java.text.CharacterIterator)', [
			[/* method description */
				[/* text */ 't', `Set a new string over which to iterate.`]
			],
			[/* parameters */
				[/* parameter */ 'source', [/* parameter description */
					[/* text */ 't', `the new source text.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getMaxExpansion(int)', [
			[/* method description */
				[/* text */ 't', `Return the maximum length of any expansion sequences that end
 with the specified comparison order.`]
			],
			[/* parameters */
				[/* parameter */ 'order', [/* parameter description */
					[/* text */ 't', `a collation order returned by previous or next.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the maximum length of any expansion sequences ending
         with the specified order.`]
			]
		]],
		[/* method */ 'primaryOrder(int)', [
			[/* method description */
				[/* text */ 't', `Return the primary component of a collation element.`]
			],
			[/* parameters */
				[/* parameter */ 'order', [/* parameter description */
					[/* text */ 't', `the collation element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the element's primary component`]
			]
		]],
		[/* method */ 'secondaryOrder(int)', [
			[/* method description */
				[/* text */ 't', `Return the secondary component of a collation element.`]
			],
			[/* parameters */
				[/* parameter */ 'order', [/* parameter description */
					[/* text */ 't', `the collation element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the element's secondary component`]
			]
		]],
		[/* method */ 'tertiaryOrder(int)', [
			[/* method description */
				[/* text */ 't', `Return the tertiary component of a collation element.`]
			],
			[/* parameters */
				[/* parameter */ 'order', [/* parameter description */
					[/* text */ 't', `the collation element`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the element's tertiary component`]
			]
		]]
	],
]);
