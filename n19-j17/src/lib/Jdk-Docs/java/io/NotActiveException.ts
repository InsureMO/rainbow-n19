import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.NotActiveException', [
	[/* class description */
		[/* text */ 't', `Thrown when serialization or deserialization is not active.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructor to create a new NotActiveException with the reason given.`]
			],
			[/* parameters */
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `a String describing the reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor to create a new NotActiveException without a reason.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
