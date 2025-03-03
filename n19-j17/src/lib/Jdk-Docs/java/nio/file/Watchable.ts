import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.Watchable', [
	[/* class description */
		[/* text */ 't', `An object that may be registered with a watch service so that it can be
 `],
		[/* text */ 't', `watched`],
		[/* text */ 't', ` for changes and events.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` This interface defines the `],
			[/* reference */ 'r', `#register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind%5B%5D,java.nio.file.WatchEvent.Modifier...)`, `register`],
			[/* text */ 't', ` method to register
 the object with a `],
			[/* reference */ 'r', `java.nio.file.WatchService`],
			[/* text */ 't', ` returning a `],
			[/* reference */ 'r', `java.nio.file.WatchKey`],
			[/* text */ 't', ` to
 represent the registration. An object may be registered with more than one
 watch service. Registration with a watch service is cancelled by invoking the
 key's `],
			[/* reference */ 'r', `.WatchKey#cancel()`],
			[/* text */ 't', ` method.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind[],java.nio.file.WatchEvent.Modifier...)', [
			[/* method description */
				[/* text */ 't', `Registers an object with a watch service.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` If the file system object identified by this object is currently
 registered with the watch service then the watch key, representing that
 registration, is returned after changing the event set or modifiers to
 those specified by the `],
					[/* inline code block */ 'i', `events`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `modifiers`],
					[/* text */ 't', ` parameters.
 Changing the event set does not cause pending events for the object to be
 discarded. Objects are automatically registered for the `],
					[/* reference */ 'r', `.StandardWatchEventKinds#OVERFLOW`],
					[/* text */ 't', ` event. This event is not
 required to be present in the array of events.

 `]
				]],
				[/* block */ 'b', ` Otherwise the file system object has not yet been registered with the
 given watch service, so it is registered and the resulting new key is
 returned.

 `],
				[/* block */ 'b', ` Implementations of this interface should specify the events they
 support.`]
			],
			[/* parameters */
				[/* parameter */ 'watcher', [/* parameter description */
					[/* text */ 't', `the watch service to which this object is to be registered`]
				]],
				[/* parameter */ 'events', [/* parameter description */
					[/* text */ 't', `the events for which this object should be registered`]
				]],
				[/* parameter */ 'modifiers', [/* parameter description */
					[/* text */ 't', `the modifiers, if any, that modify how the object is registered`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if unsupported events or modifiers are specified`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an invalid of combination of events are modifiers are specified`]
				]],
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if the watch service is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and it denies an unspecified
          permission required to monitor this object. Implementations of
          this interface should specify the permission checks.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a key representing the registration of this object with the
          given watch service`]
			]
		]],
		[/* method */ 'register(java.nio.file.WatchService,java.nio.file.WatchEvent.Kind...)', [
			[/* method description */
				[/* text */ 't', `Registers an object with a watch service.

 `],
				[/* block */ 'b', ` An invocation of this method behaves in exactly the same way as the
 invocation
 `],
				[/* code block */ 'c', [
					[/* text */ 't', `     watchable.`],
					[/* text */ 't', `register`],
					[/* text */ 't', `(watcher, events, new WatchEvent.Modifier[0]);
 `]
				]],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'watcher', [/* parameter description */
					[/* text */ 't', `the watch service to which this object is to be registered`]
				]],
				[/* parameter */ 'events', [/* parameter description */
					[/* text */ 't', `the events for which this object should be registered`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if unsupported events are specified`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if an invalid of combination of events are specified`]
				]],
				[/* throw */ 'java.nio.file.ClosedWatchServiceException', [/* throw description */
					[/* text */ 't', `if the watch service is closed`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is installed and it denies an unspecified
          permission required to monitor this object. Implementations of
          this interface should specify the permission checks.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a key representing the registration of this object with the
          given watch service`]
			]
		]]
	],
]);
