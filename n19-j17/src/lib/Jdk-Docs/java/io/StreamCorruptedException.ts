import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.StreamCorruptedException', [
	[/* class description */
		[/* text */ 't', `Thrown when control information that was read from an object stream
 violates internal consistency checks.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Create a StreamCorruptedException and list a reason why thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'reason', [/* parameter description */
					[/* text */ 't', `String describing the reason for the exception.`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Create a StreamCorruptedException and list no reason why thrown.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
