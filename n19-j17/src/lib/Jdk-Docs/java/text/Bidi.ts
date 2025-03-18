import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.Bidi', [
	[/* class description */
		[/* text */ 't', `This class implements the Unicode Bidirectional Algorithm.
 `],
		[/* block */ 'b', `
 A Bidi object provides information on the bidirectional reordering of the text
 used to create it.  This is required, for example, to properly display Arabic
 or Hebrew text.  These languages are inherently mixed directional, as they order
 numbers from left-to-right while ordering most other text from right-to-left.
 `],
		[/* block */ 'b', `
 Once created, a Bidi object can be queried to see if the text it represents is
 all left-to-right or all right-to-left.  Such objects are very lightweight and
 this text is relatively easy to process.
 `],
		[/* block */ 'b', `
 If there are multiple runs of text, information about the runs can be accessed
 by indexing to get the start, limit, and level of a run.  The level represents
 both the direction and the 'nesting level' of a directional run.  Odd levels
 are right-to-left, while even levels are left-to-right.  So for example level
 0 represents left-to-right text, while level 1 represents right-to-left text, and
 level 2 represents left-to-right text embedded in a right-to-left run.`]
	],
	[/* fields */
		[/* field */ 'DIRECTION_DEFAULT_LEFT_TO_RIGHT', [
			[/* field description */
				[/* text */ 't', `Constant indicating that the base direction depends on the first strong
 directional character in the text according to the Unicode
 Bidirectional Algorithm.  If no strong directional character is present,
 the base direction is left-to-right.`]
			],
		]],
		[/* field */ 'DIRECTION_DEFAULT_RIGHT_TO_LEFT', [
			[/* field description */
				[/* text */ 't', `Constant indicating that the base direction depends on the first strong
 directional character in the text according to the Unicode
 Bidirectional Algorithm.  If no strong directional character is present,
 the base direction is right-to-left.`]
			],
		]],
		[/* field */ 'DIRECTION_LEFT_TO_RIGHT', [
			[/* field description */
				[/* text */ 't', `Constant indicating base direction is left-to-right.`]
			],
		]],
		[/* field */ 'DIRECTION_RIGHT_TO_LEFT', [
			[/* field description */
				[/* text */ 't', `Constant indicating base direction is right-to-left.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(char[],int,byte[],int,int,int)', [
			[/* constructor description */
				[/* text */ 't', `Create Bidi from the given text, embedding, and direction information.
 The embeddings array may be null.  If present, the values represent embedding level
 information.  Negative values from -1 to -61 indicate overrides at the absolute value
 of the level.  Positive values from 1 to 61 indicate embeddings.  Where values are
 zero, the base embedding level as determined by the base direction is assumed.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `an array containing the paragraph of text to process.`]
				]],
				[/* parameter */ 'textStart', [/* parameter description */
					[/* text */ 't', `the index into the text array of the start of the paragraph.`]
				]],
				[/* parameter */ 'embeddings', [/* parameter description */
					[/* text */ 't', `an array containing embedding values for each character in the paragraph.
 This can be null, in which case it is assumed that there is no external embedding information.`]
				]],
				[/* parameter */ 'embStart', [/* parameter description */
					[/* text */ 't', `the index into the embedding array of the start of the paragraph.`]
				]],
				[/* parameter */ 'paragraphLength', [/* parameter description */
					[/* text */ 't', `the length of the paragraph in the text and embeddings arrays.`]
				]],
				[/* parameter */ 'flags', [/* parameter description */
					[/* text */ 't', `a collection of flags that control the algorithm.  The
 algorithm understands the flags DIRECTION_LEFT_TO_RIGHT, DIRECTION_RIGHT_TO_LEFT,
 DIRECTION_DEFAULT_LEFT_TO_RIGHT, and DIRECTION_DEFAULT_RIGHT_TO_LEFT.
 Other values are reserved.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Create Bidi from the given paragraph of text and base direction.`]
			],
			[/* parameters */
				[/* parameter */ 'paragraph', [/* parameter description */
					[/* text */ 't', `a paragraph of text`]
				]],
				[/* parameter */ 'flags', [/* parameter description */
					[/* text */ 't', `a collection of flags that control the algorithm.  The
 algorithm understands the flags DIRECTION_LEFT_TO_RIGHT, DIRECTION_RIGHT_TO_LEFT,
 DIRECTION_DEFAULT_LEFT_TO_RIGHT, and DIRECTION_DEFAULT_RIGHT_TO_LEFT.
 Other values are reserved.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.text.AttributedCharacterIterator)', [
			[/* constructor description */
				[/* text */ 't', `Create Bidi from the given paragraph of text.
 `],
				[/* block */ 'b', `
 The RUN_DIRECTION attribute in the text, if present, determines the base
 direction (left-to-right or right-to-left).  If not present, the base
 direction is computes using the Unicode Bidirectional Algorithm, defaulting to left-to-right
 if there are no strong directional characters in the text.  This attribute, if
 present, must be applied to all the text in the paragraph.
 `],
				[/* block */ 'b', `
 The BIDI_EMBEDDING attribute in the text, if present, represents embedding level
 information.  Negative values from -1 to -62 indicate overrides at the absolute value
 of the level.  Positive values from 1 to 62 indicate embeddings.  Where values are
 zero or not defined, the base embedding level as determined by the base direction
 is assumed.
 `],
				[/* block */ 'b', `
 The NUMERIC_SHAPING attribute in the text, if present, converts European digits to
 other decimal digits before running the bidi algorithm.  This attribute, if present,
 must be applied to all the text in the paragraph.`]
			],
			[/* parameters */
				[/* parameter */ 'paragraph', [/* parameter description */
					[/* text */ 't', `a paragraph of text with optional character and paragraph attribute information`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'baseIsLeftToRight()', [
			[/* method description */
				[/* text */ 't', `Return true if the base direction is left-to-right.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the base direction is left-to-right`]
			]
		]],
		[/* method */ 'isLeftToRight()', [
			[/* method description */
				[/* text */ 't', `Return true if the line is all left-to-right text and the base direction is left-to-right.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the line is all left-to-right text and the base direction is left-to-right`]
			]
		]],
		[/* method */ 'isMixed()', [
			[/* method description */
				[/* text */ 't', `Return true if the line is not left-to-right or right-to-left.  This means it either has mixed runs of left-to-right
 and right-to-left text, or the base direction differs from the direction of the only run of text.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the line is not left-to-right or right-to-left.`]
			]
		]],
		[/* method */ 'isRightToLeft()', [
			[/* method description */
				[/* text */ 't', `Return true if the line is all right-to-left text, and the base direction is right-to-left.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the line is all right-to-left text, and the base direction is right-to-left`]
			]
		]],
		[/* method */ 'getBaseLevel()', [
			[/* method description */
				[/* text */ 't', `Return the base level (0 if left-to-right, 1 if right-to-left).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the base level`]
			]
		]],
		[/* method */ 'getLength()', [
			[/* method description */
				[/* text */ 't', `Return the length of text in the line.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the length of text in the line`]
			]
		]],
		[/* method */ 'getLevelAt(int)', [
			[/* method description */
				[/* text */ 't', `Return the resolved level of the character at offset.  If offset is
 < 0 or ≥ the length of the line, return the base direction
 level.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the index of the character for which to return the level`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the resolved level of the character at offset`]
			]
		]],
		[/* method */ 'getRunCount()', [
			[/* method description */
				[/* text */ 't', `Return the number of level runs.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the number of level runs`]
			]
		]],
		[/* method */ 'getRunLevel(int)', [
			[/* method description */
				[/* text */ 't', `Return the level of the nth logical run in this line.`]
			],
			[/* parameters */
				[/* parameter */ 'run', [/* parameter description */
					[/* text */ 't', `the index of the run, between 0 and `],
					[/* inline code block */ 'i', `getRunCount()`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the level of the run`]
			]
		]],
		[/* method */ 'getRunLimit(int)', [
			[/* method description */
				[/* text */ 't', `Return the index of the character past the end of the nth logical run in this line, as
 an offset from the start of the line.  For example, this will return the length
 of the line for the last run on the line.`]
			],
			[/* parameters */
				[/* parameter */ 'run', [/* parameter description */
					[/* text */ 't', `the index of the run, between 0 and `],
					[/* inline code block */ 'i', `getRunCount()`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `limit the limit of the run`]
			]
		]],
		[/* method */ 'getRunStart(int)', [
			[/* method description */
				[/* text */ 't', `Return the index of the character at the start of the nth logical run in this line, as
 an offset from the start of the line.`]
			],
			[/* parameters */
				[/* parameter */ 'run', [/* parameter description */
					[/* text */ 't', `the index of the run, between 0 and `],
					[/* inline code block */ 'i', `getRunCount()`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the start of the run`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Display the bidi internal state, used in debugging.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'createLineBidi(int,int)', [
			[/* method description */
				[/* text */ 't', `Create a Bidi object representing the bidi information on a line of text within
 the paragraph represented by the current Bidi.  This call is not required if the
 entire paragraph fits on one line.`]
			],
			[/* parameters */
				[/* parameter */ 'lineStart', [/* parameter description */
					[/* text */ 't', `the offset from the start of the paragraph to the start of the line.`]
				]],
				[/* parameter */ 'lineLimit', [/* parameter description */
					[/* text */ 't', `the offset from the start of the paragraph to the limit of the line.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Bidi`],
				[/* text */ 't', ` object`]
			]
		]],
		[/* method */ 'requiresBidi(char[],int,int)', [
			[/* method description */
				[/* text */ 't', `Return true if the specified text requires bidi analysis.  If this returns false,
 the text will display left-to-right.  Clients can then avoid constructing a Bidi object.
 Text in the Arabic Presentation Forms area of Unicode is presumed to already be shaped
 and ordered for display, and so will not cause this function to return true.`]
			],
			[/* parameters */
				[/* parameter */ 'text', [/* parameter description */
					[/* text */ 't', `the text containing the characters to test`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the start of the range of characters to test`]
				]],
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `the limit of the range of characters to test`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `true if the range of characters requires bidi analysis`]
			]
		]],
		[/* method */ 'reorderVisually(byte[],int,java.lang.Object[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reorder the objects in the array into visual order based on their levels.
 This is a utility function to use when you have a collection of objects
 representing runs of text in logical order, each run containing text
 at a single level.  The elements at `],
				[/* inline code block */ 'i', `index`],
				[/* text */ 't', ` from
 `],
				[/* inline code block */ 'i', `objectStart`],
				[/* text */ 't', ` up to `],
				[/* inline code block */ 'i', `objectStart + count`],
				[/* text */ 't', `
 in the objects array will be reordered into visual order assuming
 each run of text has the level indicated by the corresponding element
 in the levels array (at `],
				[/* inline code block */ 'i', `index - objectStart + levelStart`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'levels', [/* parameter description */
					[/* text */ 't', `an array representing the bidi level of each object`]
				]],
				[/* parameter */ 'levelStart', [/* parameter description */
					[/* text */ 't', `the start position in the levels array`]
				]],
				[/* parameter */ 'objects', [/* parameter description */
					[/* text */ 't', `the array of objects to be reordered into visual order`]
				]],
				[/* parameter */ 'objectStart', [/* parameter description */
					[/* text */ 't', `the start position in the objects array`]
				]],
				[/* parameter */ 'count', [/* parameter description */
					[/* text */ 't', `the number of objects to reorder`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
