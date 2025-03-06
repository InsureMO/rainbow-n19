import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchEvent', [
	[/* class description */
		[/* text */ 't', `An event or a repeated event for an object that is registered with a `],
		[/* reference */ 'r', `java.nio.file.WatchService`, `WatchService`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An event is classified by its `],
			[/* reference */ 'r', `#kind()`, `kind`],
			[/* text */ 't', ` and has a `],
			[/* reference */ 'r', `#count()`, `count`],
			[/* text */ 't', ` to indicate the number of times that the event has been
 observed. This allows for efficient representation of repeated events. The
 `],
			[/* reference */ 'r', `#context()`, `context`],
			[/* text */ 't', ` method returns any context associated with
 the event. In the case of a repeated event then the context is the same for
 all events.

 `]
		]],
		[/* block */ 'b', ` Watch events are immutable and safe for use by multiple concurrent
 threads.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'count()', [
			[/* method description */
				[/* text */ 't', `Returns the event count. If the event count is greater than `],
				[/* inline code block */ 'i', `1`],
				[/* text */ 't', `
 then this is a repeated event.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the event count`]
			]
		]],
		[/* method */ 'kind()', [
			[/* method description */
				[/* text */ 't', `Returns the event kind.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the event kind`]
			]
		]],
		[/* method */ 'context()', [
			[/* method description */
				[/* text */ 't', `Returns the context for the event.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` In the case of `],
					[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_CREATE`, `ENTRY_CREATE`],
					[/* text */ 't', `,
 `],
					[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_DELETE`, `ENTRY_DELETE`],
					[/* text */ 't', `, and `],
					[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_MODIFY`, `ENTRY_MODIFY`],
					[/* text */ 't', ` events the context is
 a `],
					[/* inline code block */ 'i', `Path`],
					[/* text */ 't', ` that is the `],
					[/* reference */ 'r', `java.nio.file.Path#relativize(java.nio.file.Path)`, `relative`],
					[/* text */ 't', ` path between
 the directory registered with the watch service, and the entry that is
 created, deleted, or modified.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the event context; may be `],
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
]);
