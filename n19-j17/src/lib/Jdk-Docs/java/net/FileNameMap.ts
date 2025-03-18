import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.FileNameMap', [
	[/* class description */
		[/* text */ 't', `A simple interface which provides a mechanism to map
 between a file name and a MIME type string.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'getContentTypeFor(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Gets the MIME type for the specified file name.`]
			],
			[/* parameters */
				[/* parameter */ 'fileName', [/* parameter description */
					[/* text */ 't', `the specified file name`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` indicating the MIME
 type for the specified file name.`]
			]
		]]
	],
	/* enum values */ UDF
]);
