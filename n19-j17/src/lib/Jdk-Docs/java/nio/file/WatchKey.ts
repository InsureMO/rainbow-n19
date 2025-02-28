import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.WatchKey', [
	[/* class description */
		[/* text */ 't', `A token representing the registration of a `],
		[/* reference */ 'r', `java.nio.file.Watchable`],
		[/* text */ 't', ` object
 with a `],
		[/* reference */ 'r', `java.nio.file.WatchService`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A watch key is created when a watchable object is registered with a watch
 service. The key remains `],
			[/* reference */ 'r', `valid`],
			[/* text */ 't', ` until:
 `]
		]],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', ` It is cancelled, explicitly, by invoking its `],
				[/* reference */ 'r', `cancel`],
				[/* text */ 't', `
     method, or`]
			]],
			[/* block */ 'b', ` Cancelled implicitly, because the object is no longer accessible,
     or `],
			[/* block */ 'b', [
				[/* text */ 't', ` By `],
				[/* external link */ 'a', `WatchService.html#close()`, `closing`],
				[/* text */ 't', ` the watch service. `]
			]]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` A watch key has a state. When initially created the key is said to be
 `],
			[/* text */ 't', `ready`],
			[/* text */ 't', `. When an event is detected then the key is `],
			[/* text */ 't', `signalled`],
			[/* text */ 't', `
 and queued so that it can be retrieved by invoking the watch service's `],
			[/* external link */ 'a', `WatchService.html#poll()`, `poll`],
			[/* text */ 't', ` or `],
			[/* external link */ 'a', `WatchService.html#take()`, `take`],
			[/* text */ 't', ` methods. Once
 signalled, a key remains in this state until its `],
			[/* reference */ 'r', `reset`],
			[/* text */ 't', ` method
 is invoked to return the key to the ready state. Events detected while the
 key is in the signalled state are queued but do not cause the key to be
 re-queued for retrieval from the watch service. Events are retrieved by
 invoking the key's `],
			[/* reference */ 'r', `pollEvents`],
			[/* text */ 't', ` method. This method
 retrieves and removes all events accumulated for the object. When initially
 created, a watch key has no pending events. Typically events are retrieved
 when the key is in the signalled state leading to the following idiom:

 `]
		]],
		[/* code block */ 'c', `     for (;;) {
         // retrieve key
         WatchKey key = watcher.take();

         // process events
         for (WatchEvent&lt;?&gt; event: key.pollEvents()) {
             :
         }

         // reset the key
         boolean valid = key.reset();
         if (!valid) {
             // object no longer registered
         }
     }
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', ` Watch keys are safe for use by multiple concurrent threads. Where there
 are several threads retrieving signalled keys from a watch service then care
 should be taken to ensure that the `],
			[/* inline code block */ 'i', `reset`],
			[/* text */ 't', ` method is only invoked after
 the events for the object have been processed. This ensures that one thread
 is processing the events for an object at any time.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Resets this watch key.

 `],
				[/* block */ 'b', ` If this watch key has been cancelled or this watch key is already in
 the ready state then invoking this method has no effect. Otherwise
 if there are pending events for the object then this watch key is
 immediately re-queued to the watch service. If there are no pending
 events then the watch key is put into the ready state and will remain in
 that state until an event is detected or the watch key is cancelled.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the watch key is valid and has been reset, and
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` if the watch key could not be reset because it is
          no longer `],
				[/* reference */ 'r', `valid`]
			]
		]],
		[/* method */ 'cancel()', [
			[/* method description */
				[/* text */ 't', `Cancels the registration with the watch service. Upon return the watch key
 will be invalid. If the watch key is enqueued, waiting to be retrieved
 from the watch service, then it will remain in the queue until it is
 removed. Pending events, if any, remain pending and may be retrieved by
 invoking the `],
				[/* reference */ 'r', `pollEvents`],
				[/* text */ 't', ` method after the key is
 cancelled.

 `],
				[/* block */ 'b', ` If this watch key has already been cancelled then invoking this
 method has no effect.  Once cancelled, a watch key remains forever invalid.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'isValid()', [
			[/* method description */
				[/* text */ 't', `Tells whether or not this watch key is valid.

 `],
				[/* block */ 'b', ` A watch key is valid upon creation and remains until it is cancelled,
 or its watch service is closed.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, this watch key is valid`]
			]
		]],
		[/* method */ 'pollEvents()', [
			[/* method description */
				[/* text */ 't', `Retrieves and removes all pending events for this watch key, returning
 a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` of the events that were retrieved.

 `],
				[/* block */ 'b', ` Note that this method does not wait if there are no events pending.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the list of the events retrieved; may be empty`]
			]
		]],
		[/* method */ 'watchable()', [
			[/* method description */
				[/* text */ 't', `Returns the object for which this watch key was created. This method will
 continue to return the object even after the key is cancelled.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` As the `],
					[/* inline code block */ 'i', `WatchService`],
					[/* text */ 't', ` is intended to map directly on to the
 native file event notification facility (where available) then many of
 details on how registered objects are watched is highly implementation
 specific. When watching a directory for changes for example, and the
 directory is moved or renamed in the file system, there is no guarantee
 that the watch key will be cancelled and so the object returned by this
 method may no longer be a valid path to the directory.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the object for which this watch key was created`]
			]
		]]
	],
]);
