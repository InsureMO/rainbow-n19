import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.UnsupportedEncodingException', [
	[/* class description */
		[/* text */ 't', `The Character Encoding is not supported.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an UnsupportedEncodingException without a detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an UnsupportedEncodingException with a detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `Describes the reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
