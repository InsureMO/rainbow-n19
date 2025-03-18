import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.Flushable', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* inline code block */ 'i', `Flushable`],
		[/* text */ 't', ` is a destination of data that can be flushed.  The
 flush method is invoked to write any buffered output to the underlying
 stream.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes this stream by writing any buffered output to the underlying
 stream.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
