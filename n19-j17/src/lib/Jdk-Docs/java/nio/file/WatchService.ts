import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchService', [
	[/* class description */
		[/* text */ 't', `A watch service that `],
		[/* text */ 't', `watches`],
		[/* text */ 't', ` registered objects for changes and
 events. For example a file manager may use a watch service to monitor a
 directory for changes so that it can update its display of the list of files
 when files are created or deleted.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A `],
			[/* reference */ 'r', `java.nio.file.Watchable`, `Watchable`],
			[/* text */ 't', ` object is registered with a watch service by invoking
 its `],
			[/* reference */ 'r', `java.nio.file.Watchable#register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind[],java.nio.file.WatchEvent.Modifier...)`, `register`],
			[/* text */ 't', ` method, returning a `],
			[/* reference */ 'r', `java.nio.file.WatchKey`, `WatchKey`],
			[/* text */ 't', `
 to represent the registration. When an event for an object is detected the
 key is `],
			[/* text */ 't', `signalled`],
			[/* text */ 't', `, and if not currently signalled, it is queued to
 the watch service so that it can be retrieved by consumers that invoke the
 `],
			[/* reference */ 'r', `#poll()`, `poll`],
			[/* text */ 't', ` or `],
			[/* reference */ 'r', `#take()`, `take`],
			[/* text */ 't', ` methods to retrieve keys
 and process events. Once the events have been processed the consumer
 invokes the key's `],
			[/* reference */ 'r', `java.nio.file.WatchKey#reset()`, `reset`],
			[/* text */ 't', ` method to reset the key which
 allows the key to be signalled and re-queued with further events.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` Registration with a watch service is cancelled by invoking the key's
 `],
			[/* reference */ 'r', `java.nio.file.WatchKey#cancel()`, `cancel`],
			[/* text */ 't', ` method. A key that is queued at the time that
 it is cancelled remains in the queue until it is retrieved. Depending on the
 object, a key may be cancelled automatically. For example, suppose a
 directory is watched and the watch service detects that it has been deleted
 or its file system is no longer accessible. When a key is cancelled in this
 manner it is signalled and queued, if not currently signalled. To ensure
 that the consumer is notified the return value from the `],
			[/* inline code block */ 'i', `reset`],
			[/* text */ 't', `
 method indicates if the key is valid.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` A watch service is safe for use by multiple concurrent consumers. To
 ensure that only one consumer processes the events for a particular object at
 any time then care should be taken to ensure that the key's `],
			[/* inline code block */ 'i', `reset`],
			[/* text */ 't', `
 method is only invoked after its events have been processed. The `],
			[/* reference */ 'r', `#close()`, `close`],
			[/* text */ 't', ` method may be invoked at any time to close the service causing
 any threads waiting to retrieve keys, to throw `],
			[/* inline code block */ 'i', `ClosedWatchServiceException`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` File systems may report events faster than they can be retrieved or
 processed and an implementation may impose an unspecified limit on the number
 of events that it may accumulate. Where an implementation `],
			[/* text */ 't', `knowingly`],
			[/* text */ 't', `
 discards events then it arranges for the key's `],
			[/* reference */ 'r', `java.nio.file.WatchKey#pollEvents()`, `pollEvents`],
			[/* text */ 't', ` method to return an element with an event type of `],
			[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#OVERFLOW`, `OVERFLOW`],
			[/* text */ 't', `. This event can be used by the
 consumer as a trigger to re-examine the state of the object.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` When an event is reported to indicate that a file in a watched directory
 has been modified then there is no guarantee that the program (or programs)
 that have modified the file have completed. Care should be taken to coordinate
 access with other programs that may be updating the file.
 The `],
			[/* reference */ 'r', `java.nio.channels.FileChannel`, `FileChannel`],
			[/* text */ 't', ` class defines methods
 to lock regions of a file against access by other programs.

 `]
		]],
		[/* block */ 'b', `Platform dependencies`],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` The implementation that observes events from the file system is intended
 to map directly on to the native file event notification facility where
 available, or to use a primitive mechanism, such as polling, when a native
 facility is not available. Consequently, many of the details on how events
 are detected, their timeliness, and whether their ordering is preserved are
 highly implementation specific. For example, when a file in a watched
 directory is modified then it may result in a single `],
			[/* reference */ 'r', `java.nio.file.StandardWatchEventKinds#ENTRY_MODIFY`, `ENTRY_MODIFY`],
			[/* text */ 't', ` event in some
 implementations but several events in other implementations. Short-lived
 files (meaning files that are deleted very quickly after they are created)
 may not be detected by primitive implementations that periodically poll the
 file system to detect changes.

 `]
		]],
		[/* block */ 'b', ` If a watched file is not located on a local storage device then it is
 implementation specific if changes to the file can be detected. In particular,
 it is not required that changes to files carried out on remote systems be
 detected.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'poll()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the next watch key, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if none are
 present.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if this watch service is closed`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next watch key, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'poll(long,java.util.concurrent.TimeUnit)', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes the next watch key, waiting if necessary up to the
 specified wait time if none are yet present.`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `how to wait before giving up, in units of unit`]
				]],
				[/* parameter */ 'unit', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `TimeUnit`],
					[/* text */ 't', ` determining how to interpret the timeout
          parameter`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if this watch service is closed, or it is closed while waiting
          for the next key`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next watch key, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'take()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes next watch key, waiting if none are yet present.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if this watch service is closed, or it is closed while waiting
          for the next key`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `if interrupted while waiting`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the next watch key`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this watch service.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If a thread is currently blocked in the `],
					[/* reference */ 'r', `#take()`, `take`],
					[/* text */ 't', ` or `],
					[/* reference */ 'r', `#poll(long,java.util.concurrent.TimeUnit)`, `poll`],
					[/* text */ 't', ` methods waiting for a key to be queued then
 it immediately receives a `],
					[/* reference */ 'r', `java.nio.file.ClosedWatchServiceException`, `ClosedWatchServiceException`],
					[/* text */ 't', `. Any
 valid keys associated with this watch service are `],
					[/* reference */ 'r', `java.nio.file.WatchKey#isValid()`, `invalidated`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` After a watch service is closed, any further attempt to invoke
 operations upon it will throw `],
					[/* reference */ 'r', `java.nio.file.ClosedWatchServiceException`, `ClosedWatchServiceException`],
					[/* text */ 't', `.
 If this watch service is already closed then invoking this method
 has no effect.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
