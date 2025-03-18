import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IllegalFormatCodePointException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when a character with an invalid Unicode code
 point as defined by `],
		[/* reference */ 'r', `java.lang.Character#isValidCodePoint(int)`, `Character.isValidCodePoint(int)`],
		[/* text */ 't', ` is passed to the
 `],
		[/* reference */ 'r', `java.util.Formatter`, `Formatter`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Unless otherwise specified, passing a `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', ` argument to any
 method or constructor in this class will cause a `],
			[/* reference */ 'r', `java.lang.NullPointerException`, `NullPointerException`],
			[/* text */ 't', ` to be thrown.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the specified illegal code
 point as defined by `],
				[/* reference */ 'r', `java.lang.Character#isValidCodePoint(int)`, `Character.isValidCodePoint(int)`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'c', [/* parameter description */
					[/* text */ 't', `The illegal Unicode code point`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getCodePoint()', [
			[/* method description */
				[/* text */ 't', `Returns the illegal code point as defined by `],
				[/* reference */ 'r', `java.lang.Character#isValidCodePoint(int)`, `Character.isValidCodePoint(int)`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The illegal Unicode code point`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
	/* enum values */ UDF
]);
