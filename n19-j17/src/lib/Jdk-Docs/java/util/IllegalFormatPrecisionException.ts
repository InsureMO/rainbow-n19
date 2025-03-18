import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.IllegalFormatPrecisionException', [
	[/* class description */
		[/* text */ 't', `Unchecked exception thrown when the precision is a negative value other than
 `],
		[/* inline code block */ 'i', `-1`],
		[/* text */ 't', `, the conversion does not support a precision, or the value is
 otherwise unsupported. If the precision is not representable by an
 `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', ` type, then the value `],
		[/* inline code block */ 'i', `Integer.MIN_VALUE`],
		[/* text */ 't', ` will be used
 in the exception.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(int)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an instance of this class with the specified precision.`]
			],
			[/* parameters */
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `The precision`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getPrecision()', [
			[/* method description */
				[/* text */ 't', `Returns the precision. If the precision isn't representable by an
 `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', `, then will return `],
				[/* inline code block */ 'i', `Integer.MIN_VALUE`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The precision`]
			]
		]],
		[/* method */ 'getMessage()', UDF]
	],
	/* enum values */ UDF
]);
