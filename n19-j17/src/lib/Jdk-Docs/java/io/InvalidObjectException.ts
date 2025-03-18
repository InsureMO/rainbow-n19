import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.InvalidObjectException', [
	[/* class description */
		[/* text */ 't', `Indicates that one or more deserialized objects failed validation
 tests.  The argument should provide the reason for the failure.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InvalidObjectException`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `Detailed message explaining the reason for the failure.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
