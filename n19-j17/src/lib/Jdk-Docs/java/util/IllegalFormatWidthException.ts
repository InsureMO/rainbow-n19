import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IllegalFormatWidthException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when the format width is a negative value other
 than `],
		[/* inline code block */ 'i', `-1`],
		[/* text */ 't', ` or is otherwise unsupported. If a given format width is not
 representable by an `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` type, then the value
 `],
		[/* inline code block */ 'i', `Integer.MIN_VALUE`],
		[/* text */ 't', ` will be used in the exception.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the specified width.`]
			],
			[/* parameters */
				[/* parameter */ 'w', [/* parameter description */
					[/* text */ 't', `The width`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getWidth()', [
			[/* method description */
				[/* text */ 't', `Returns the width. If the width is not representable by an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `,
 then returns `],
				[/* inline code block */ 'i', `Integer.MIN_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The width`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
	/* enum values */ UDF
]);
