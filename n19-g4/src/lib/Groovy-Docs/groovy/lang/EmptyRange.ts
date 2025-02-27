import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('groovy.lang.EmptyRange', [
	[/* class description */
		[/* text */ 't', `Constructing Ranges like 0..&lt;0`]
	],
	/* class sees */ UDF,
	[/* fields */
		[/* field */ 'at', [
			[/* field description */
				[/* text */ 't', `The value at which the range originates (may be `],
				[/* inline code block */ 'i', 'null'],
				[/* text */ 't', `).`]
			],
		/* sees */ UDF
		]]
	],
	UDF, UDF
]);
