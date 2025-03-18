import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.BreakIterator', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `BreakIterator`],
		[/* text */ 't', ` class implements methods for finding
 the location of boundaries in text. Instances of `],
		[/* inline code block */ 'i', `BreakIterator`],
		[/* text */ 't', `
 maintain a current position and scan over text
 returning the index of characters where boundaries occur.
 Internally, `],
		[/* inline code block */ 'i', `BreakIterator`],
		[/* text */ 't', ` scans text using a
 `],
		[/* inline code block */ 'i', `CharacterIterator`],
		[/* text */ 't', `, and is thus able to scan text held
 by any object implementing that protocol. A `],
		[/* inline code block */ 'i', `StringCharacterIterator`],
		[/* text */ 't', `
 is used to scan `],
		[/* inline code block */ 'i', `String`],
		[/* text */ 't', ` objects passed to `],
		[/* inline code block */ 'i', `setText`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 You use the factory methods provided by this class to create
 instances of various types of break iterators. In particular,
 use `],
			[/* inline code block */ 'i', `getWordInstance`],
			[/* text */ 't', `, `],
			[/* inline code block */ 'i', `getLineInstance`],
			[/* text */ 't', `,
 `],
			[/* inline code block */ 'i', `getSentenceInstance`],
			[/* text */ 't', `, and `],
			[/* inline code block */ 'i', `getCharacterInstance`],
			[/* text */ 't', `
 to create `],
			[/* inline code block */ 'i', `BreakIterator`],
			[/* text */ 't', `s that perform
 word, line, sentence, and character boundary analysis respectively.
 A single `],
			[/* inline code block */ 'i', `BreakIterator`],
			[/* text */ 't', ` can work only on one unit
 (word, line, sentence, and so on). You must use a different iterator
 for each unit boundary analysis you wish to perform.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `line`, ``],
			[/* text */ 't', `
 Line boundary analysis determines where a text string can be
 broken when line-wrapping. The mechanism correctly handles
 punctuation and hyphenated words. Actual line breaking needs
 to also consider the available line width and is handled by
 higher-level software.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `sentence`, ``],
			[/* text */ 't', `
 Sentence boundary analysis allows selection with correct interpretation
 of periods within numbers and abbreviations, and trailing punctuation
 marks such as quotation marks and parentheses.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `word`, ``],
			[/* text */ 't', `
 Word boundary analysis is used by search and replace functions, as
 well as within text editing applications that allow the user to
 select words with a double click. Word selection provides correct
 interpretation of punctuation marks within and following
 words. Characters that are not part of a word, such as symbols
 or punctuation marks, have word-breaks on both sides.

 `]
		]],
		[/* block */ 'b', [
			[/* anchor */ 'r', '#-id', `character`, ``],
			[/* text */ 't', `
 Character boundary analysis allows users to interact with characters
 as they expect to, for example, when moving the cursor through a text
 string. Character boundary analysis provides correct navigation
 through character strings, regardless of how the character is stored.
 The boundaries returned may be those of supplementary characters,
 combining character sequences, or ligature clusters.
 For example, an accented character might be stored as a base character
 and a diacritical mark. What users consider to be a character can
 differ between languages.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* inline code block */ 'i', `BreakIterator`],
			[/* text */ 't', ` instances returned by the factory methods
 of this class are intended for use with natural languages only, not for
 programming language text. It is however possible to define subclasses
 that tokenize a programming language.

 `]
		]],
		[/* block */ 'b', `Examples`],
		[/* block */ 'b', `
 Creating and using text boundaries:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void main(String args[]) {
      if (args.length == 1) {
          String stringToExamine = args[0];
          //print each word in order
          BreakIterator boundary = BreakIterator.getWordInstance();
          boundary.setText(stringToExamine);
          printEachForward(boundary, stringToExamine);
          //print each sentence in reverse order
          boundary = BreakIterator.getSentenceInstance(Locale.US);
          boundary.setText(stringToExamine);
          printEachBackward(boundary, stringToExamine);
          printFirst(boundary, stringToExamine);
          printLast(boundary, stringToExamine);
      }
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Print each element in order:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void printEachForward(BreakIterator boundary, String source) {
     int start = boundary.first();
     for (int end = boundary.next();
          end != BreakIterator.DONE;
          start = end, end = boundary.next()) {
          System.out.println(source.substring(start,end));
     }
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Print each element in reverse order:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void printEachBackward(BreakIterator boundary, String source) {
     int end = boundary.last();
     for (int start = boundary.previous();
          start != BreakIterator.DONE;
          end = start, start = boundary.previous()) {
         System.out.println(source.substring(start,end));
     }
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Print first element:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void printFirst(BreakIterator boundary, String source) {
     int start = boundary.first();
     int end = boundary.next();
     System.out.println(source.substring(start,end));
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Print last element:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void printLast(BreakIterator boundary, String source) {
     int end = boundary.last();
     int start = boundary.previous();
     System.out.println(source.substring(start,end));
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Print the element at a specified position:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', ` public static void printAt(BreakIterator boundary, int pos, String source) {
     int end = boundary.following(pos);
     int start = boundary.previous();
     System.out.println(source.substring(start,end));
 }
 `],
			[/* text */ 't', `
 `]
		]],
		[/* text */ 't', `

 Find the next word:
 `],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
 `],
			[/* code block */ 'c', [
				[/* inline code block */ 'i', `public static int nextWordStartAfter(int pos, String text) {
     BreakIterator wb = BreakIterator.getWordInstance();
     wb.setText(text);
     int last = wb.following(pos);
     int current = wb.next();
     while (current != BreakIterator.DONE) {
         for (int p = last; p < current; p++) {
             if (Character.isLetter(text.codePointAt(p)))
                 return last;
         }
         last = current;
         current = wb.next();
     }
     return BreakIterator.DONE;
 }`]
			]],
			[/* text */ 't', `
 (The iterator returned by BreakIterator.getWordInstance() is unique in that
 the break positions it returns don't represent both the start and end of the
 thing being iterated over.  That is, a sentence-break iterator returns breaks
 that each represent the end of one sentence and the beginning of the next.
 With the word-break iterator, the characters between two boundaries might be a
 word, or they might be the punctuation or whitespace between two words.  The
 above code uses a simple heuristic to determine which boundary is the beginning
 of a word: If the characters between this boundary and the next boundary
 include at least one letter (this can be an alphabetical letter, a CJK ideograph,
 a Hangul syllable, a Kana character, etc.), then the text between this boundary
 and the next is a word; otherwise, it's the material between words.)
 `]
		]],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'DONE', [
			[/* field description */
				[/* text */ 't', `DONE is returned by previous(), next(), next(int), preceding(int)
 and following(int) when either the first or last text boundary has been
 reached.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor. BreakIterator is stateless and has no default behavior.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'current()', [
			[/* method description */
				[/* text */ 't', `Returns character index of the text boundary that was most
 recently returned by next(), next(int), previous(), first(), last(),
 following(int) or preceding(int). If any of these methods returns
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` because either first or last text boundary
 has been reached, it returns the first or last text boundary depending on
 which one is reached.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The text boundary returned from the above methods, first or last
 text boundary.`]
			]
		]],
		[/* method */ 'first()', [
			[/* method description */
				[/* text */ 't', `Returns the first boundary. The iterator's current position is set
 to the first text boundary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The character index of the first text boundary.`]
			]
		]],
		[/* method */ 'following(int)', [
			[/* method description */
				[/* text */ 't', `Returns the first boundary following the specified character offset. If the
 specified offset is equal to the last text boundary, it returns
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and the iterator's current position is unchanged.
 Otherwise, the iterator's current position is set to the returned boundary.
 The value returned is always greater than the offset or the value
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the character offset to begin scanning.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified offset is less than
 the first text boundary or greater than the last text boundary.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The first boundary after the specified offset or
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` if the last text boundary is passed in
 as the offset.`]
			]
		]],
		[/* method */ 'last()', [
			[/* method description */
				[/* text */ 't', `Returns the last boundary. The iterator's current position is set
 to the last text boundary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The character index of the last text boundary.`]
			]
		]],
		[/* method */ 'next()', [
			[/* method description */
				[/* text */ 't', `Returns the boundary following the current boundary. If the current boundary
 is the last text boundary, it returns `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and
 the iterator's current position is unchanged. Otherwise, the iterator's
 current position is set to the boundary following the current boundary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The character index of the next text boundary or
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` if the current boundary is the last text
 boundary.
 Equivalent to next(1).`]
			]
		]],
		[/* method */ 'next(int)', [
			[/* method description */
				[/* text */ 't', `Returns the nth boundary from the current boundary. If either
 the first or last text boundary has been reached, it returns
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and the current position is set to either
 the first or last text boundary depending on which one is reached. Otherwise,
 the iterator's current position is set to the new boundary.
 For example, if the iterator's current position is the mth text boundary
 and three more boundaries exist from the current boundary to the last text
 boundary, the next(2) call will return m + 2. The new text position is set
 to the (m + 2)th text boundary. A next(4) call would return
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and the last text boundary would become the
 new text position.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `which boundary to return.  A value of 0
 does nothing.  Negative values move to previous boundaries
 and positive values move to later boundaries.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `The character index of the nth boundary from the current position
 or `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` if either first or last text boundary
 has been reached.`]
			]
		]],
		[/* method */ 'previous()', [
			[/* method description */
				[/* text */ 't', `Returns the boundary preceding the current boundary. If the current boundary
 is the first text boundary, it returns `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and
 the iterator's current position is unchanged. Otherwise, the iterator's
 current position is set to the boundary preceding the current boundary.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The character index of the previous text boundary or
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` if the current boundary is the first text
 boundary.`]
			]
		]],
		[/* method */ 'getText()', [
			[/* method description */
				[/* text */ 't', `Get the text being scanned`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the text being scanned`]
			]
		]],
		[/* method */ 'setText(java.text.CharacterIterator)', [
			[/* method description */
				[/* text */ 't', `Set a new text for scanning.  The current scan
 position is reset to first().`]
			],
			[/* parameters */
				[/* parameter */ 'newText', [/* parameter description */
					[/* text */ 't', `new text to scan.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'isBoundary(int)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified character offset is a text boundary.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the character offset to check.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified offset is less than
 the first text boundary or greater than the last text boundary.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if "offset" is a boundary position,
 `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'preceding(int)', [
			[/* method description */
				[/* text */ 't', `Returns the last boundary preceding the specified character offset. If the
 specified offset is equal to the first text boundary, it returns
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` and the iterator's current position is unchanged.
 Otherwise, the iterator's current position is set to the returned boundary.
 The value returned is always less than the offset or the value
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the character offset to begin scanning.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified offset is less than
 the first text boundary or greater than the last text boundary.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `The last boundary before the specified offset or
 `],
				[/* inline code block */ 'i', `BreakIterator.DONE`],
				[/* text */ 't', ` if the first text boundary is passed in
 as the offset.`]
			]
		]],
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Create a copy of this iterator`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A copy of this`]
			]
		]],
		[/* method */ 'getCharacterInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#character`, `character breaks`],
				[/* text */ 't', `
 for the `],
				[/* reference */ 'r', `java.util.Locale#getDefault()`, `default locale`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A break iterator for character breaks`]
			]
		]],
		[/* method */ 'getCharacterInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#character`, `character breaks`],
				[/* text */ 't', `
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for character breaks`]
			]
		]],
		[/* method */ 'getLineInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#line`, `line breaks`],
				[/* text */ 't', `
 for the `],
				[/* reference */ 'r', `java.util.Locale#getDefault()`, `default locale`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A break iterator for line breaks`]
			]
		]],
		[/* method */ 'getLineInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#line`, `line breaks`],
				[/* text */ 't', `
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for line breaks`]
			]
		]],
		[/* method */ 'getSentenceInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#sentence`, `sentence breaks`],
				[/* text */ 't', `
 for the `],
				[/* reference */ 'r', `java.util.Locale#getDefault()`, `default locale`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A break iterator for sentence breaks`]
			]
		]],
		[/* method */ 'getSentenceInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#sentence`, `sentence breaks`],
				[/* text */ 't', `
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for sentence breaks`]
			]
		]],
		[/* method */ 'getWordInstance()', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#word`, `word breaks`],
				[/* text */ 't', `
 for the `],
				[/* reference */ 'r', `java.util.Locale#getDefault()`, `default locale`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A break iterator for word breaks`]
			]
		]],
		[/* method */ 'getWordInstance(java.util.Locale)', [
			[/* method description */
				[/* text */ 't', `Returns a new `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instance
 for `],
				[/* reference */ 'r', `java.text.BreakIterator#word`, `word breaks`],
				[/* text */ 't', `
 for the given locale.`]
			],
			[/* parameters */
				[/* parameter */ 'locale', [/* parameter description */
					[/* text */ 't', `the desired locale`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `locale`],
					[/* text */ 't', ` is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A break iterator for word breaks`]
			]
		]],
		[/* method */ 'getAvailableLocales()', [
			[/* method description */
				[/* text */ 't', `Returns an array of all locales for which the
 `],
				[/* inline code block */ 'i', `get*Instance`],
				[/* text */ 't', ` methods of this class can return
 localized instances.
 The returned array represents the union of locales supported by the Java
 runtime and by installed
 `],
				[/* reference */ 'r', `java.text.spi.BreakIteratorProvider`, `BreakIteratorProvider`],
				[/* text */ 't', ` implementations.
 It must contain at least a `],
				[/* inline code block */ 'i', `Locale`],
				[/* text */ 't', `
 instance equal to `],
				[/* reference */ 'r', `java.util.Locale#US`, `Locale.US`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `An array of locales for which localized
         `],
				[/* inline code block */ 'i', `BreakIterator`],
				[/* text */ 't', ` instances are available.`]
			]
		]],
		[/* method */ 'setText(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Set a new text string to be scanned.  The current scan
 position is reset to first().`]
			],
			[/* parameters */
				[/* parameter */ 'newText', [/* parameter description */
					[/* text */ 't', `new text to scan.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
