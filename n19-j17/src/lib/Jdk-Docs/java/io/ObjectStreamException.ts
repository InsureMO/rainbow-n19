import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectStreamException', [
	[/* class description */
		[/* text */ 't', `Superclass of all exceptions specific to Object Stream classes.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create an ObjectStreamException.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Create an ObjectStreamException with the specified argument.`]
			],
			[/* parameters */
				[/* parameter */ 'message', [/* parameter description */
					[/* text */ 't', `the detailed message for the exception`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
