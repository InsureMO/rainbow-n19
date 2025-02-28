import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.CharConversionException', [
	[/* class description */
		[/* text */ 't', `Base class for character conversion exceptions.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `This provides no detailed message.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `This provides a detailed message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detailed message associated with the exception.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
