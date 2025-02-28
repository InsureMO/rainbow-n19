import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.channels.FileChannel$MapMode', [
	[/* class description */
		[/* text */ 't', `A file-mapping mode.`]
	],
	[/* fields */
		[/* field */ 'READ_ONLY', [
			[/* field description */
				[/* text */ 't', `Mode for a read-only mapping.`]
			],
		]],
		[/* field */ 'READ_WRITE', [
			[/* field description */
				[/* text */ 't', `Mode for a read/write mapping.`]
			],
		]],
		[/* field */ 'PRIVATE', [
			[/* field description */
				[/* text */ 't', `Mode for a private (copy-on-write) mapping.`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string describing this file-mapping mode.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `A descriptive string`]
			]
		]]
	],
]);
