import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Number', [
	[/* class description */
		[/* text */ 't', `The abstract class `],
		[/* inline code block */ 'i', `Number`],
		[/* text */ 't', ` is the superclass of platform
 classes representing numeric values that are convertible to the
 primitive types `],
		[/* inline code block */ 'i', `byte`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `float`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `, `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `, and `],
		[/* inline code block */ 'i', `short`],
		[/* text */ 't', `.

 The specific semantics of the conversion from the numeric value of
 a particular `],
		[/* inline code block */ 'i', `Number`],
		[/* text */ 't', ` implementation to a given primitive
 type is defined by the `],
		[/* inline code block */ 'i', `Number`],
		[/* text */ 't', ` implementation in question.

 For platform classes, the conversion is often analogous to a
 narrowing primitive conversion or a widening primitive conversion
 as defined in `],
		[/* text */ 't', `The Java Language Specification`],
		[/* text */ 't', `
 for converting between primitive types.  Therefore, conversions may
 lose information about the overall magnitude of a numeric value, may
 lose precision, and may even return a result of a different sign
 than the input.

 See the documentation of a given `],
		[/* inline code block */ 'i', `Number`],
		[/* text */ 't', ` implementation for
 conversion details.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'byteValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as a `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `byte`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'shortValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'intValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'longValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as a `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `long`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'floatValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as a `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `float`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'doubleValue()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the specified number as a `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the numeric value represented by this object after conversion
          to type `],
				[/* inline code block */ 'i', `double`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
