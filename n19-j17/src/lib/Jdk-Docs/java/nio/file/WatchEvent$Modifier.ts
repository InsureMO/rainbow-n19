import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchEvent$Modifier', [
	[/* class description */
		[/* text */ 't', `An event modifier that qualifies how a `],
		[/* reference */ 'r', `java.nio.file.Watchable`, `Watchable`],
		[/* text */ 't', ` is registered
 with a `],
		[/* reference */ 'r', `java.nio.file.WatchService`, `WatchService`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `standard`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the modifier.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the modifier`]
			]
		]]
	],
]);
