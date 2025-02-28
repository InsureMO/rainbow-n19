import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchEvent$Modifier', [
	[/* class description */
		[/* text */ 't', `An event modifier that qualifies how a `],
		[/* reference */ 'r', `java.nio.file.Watchable`],
		[/* text */ 't', ` is registered
 with a `],
		[/* reference */ 'r', `java.nio.file.WatchService`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This release does not define any `],
			[/* text */ 't', `standard`],
			[/* text */ 't', ` modifiers.`]
		]]
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
