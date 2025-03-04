import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.text.ParsePosition', [
	[/* class description */
		[/* inline code block */ 'i', `ParsePosition`],
		[/* text */ 't', ` is a simple class used by `],
		[/* inline code block */ 'i', `Format`],
		[/* text */ 't', `
 and its subclasses to keep track of the current position during parsing.
 The `],
		[/* inline code block */ 'i', `parseObject`],
		[/* text */ 't', ` method in the various `],
		[/* inline code block */ 'i', `Format`],
		[/* text */ 't', `
 classes requires a `],
		[/* inline code block */ 'i', `ParsePosition`],
		[/* text */ 't', ` object as an argument.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 By design, as you parse through a string with different formats,
 you can use the same `],
			[/* inline code block */ 'i', `ParsePosition`],
			[/* text */ 't', `, since the index parameter
 records the current position.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Create a new ParsePosition with the given initial index.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `initial index`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Overrides equals`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this object is the same as the obj
          argument; `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'getErrorIndex()', [
			[/* method description */
				[/* text */ 't', `Retrieve the index at which an error occurred, or -1 if the
 error index has not been set.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the index at which an error occurred`]
			]
		]],
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Retrieve the current parse position.  On input to a parse method, this
 is the index of the character at which parsing will begin; on output, it
 is the index of the character following the last character parsed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the current parse position`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this ParsePosition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this object`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a string representation of this ParsePosition.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object`]
			]
		]],
		[/* method */ 'setErrorIndex(int)', [
			[/* method description */
				[/* text */ 't', `Set the index at which a parse error occurred.  Formatters
 should set this before returning an error code from their
 parseObject method.  The default value is -1 if this is not set.`]
			],
			[/* parameters */
				[/* parameter */ 'ei', [/* parameter description */
					[/* text */ 't', `the index at which an error occurred`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'setIndex(int)', [
			[/* method description */
				[/* text */ 't', `Set the current parse position.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `the current parse position`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
