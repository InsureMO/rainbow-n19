import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchEvent$Kind', [
	[/* class description */
		[/* text */ 't', `An event kind, for the purposes of identification.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the type of the `],
				[/* reference */ 'r', `java.nio.file.WatchEvent#context()`, `context`],
				[/* text */ 't', ` value.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the type of the context value`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the event kind.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the event kind`]
			]
		]]
	],
]);
