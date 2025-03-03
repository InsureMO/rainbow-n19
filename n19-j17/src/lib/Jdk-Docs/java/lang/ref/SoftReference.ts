import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.SoftReference', [
	[/* class description */
		[/* text */ 't', `Soft reference objects, which are cleared at the discretion of the garbage
 collector in response to memory demand.  Soft references are most often used
 to implement memory-sensitive caches.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Suppose that the garbage collector determines at a certain point in time
 that an object is `],
			[/* reference */ 'r', `.package-summary#reachability`],
			[/* text */ 't', `.  At that time it may choose to clear atomically all soft
 references to that object and all soft references to any other
 softly-reachable objects from which that object is reachable through a chain
 of strong references.  At the same time or at some later time it will
 enqueue those newly-cleared soft references that are registered with
 reference queues.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` All soft references to softly-reachable objects are guaranteed to have
 been cleared before the virtual machine throws an
 `],
			[/* inline code block */ 'i', `OutOfMemoryError`],
			[/* text */ 't', `.  Otherwise no constraints are placed upon the
 time at which a soft reference will be cleared or the order in which a set
 of such references to different objects will be cleared.  Virtual machine
 implementations are, however, encouraged to bias against clearing
 recently-created or recently-used soft references.

 `]
		]],
		[/* block */ 'b', ` Direct instances of this class may be used to implement simple caches;
 this class or derived subclasses may also be used in larger data structures
 to implement more sophisticated caches.  As long as the referent of a soft
 reference is strongly reachable, that is, is actually in use, the soft
 reference will not be cleared.  Thus a sophisticated cache can, for example,
 prevent its most recently used entries from being discarded by keeping
 strong referents to those entries, leaving the remaining entries to be
 discarded at the discretion of the garbage collector.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new soft reference that refers to the given object.  The new
 reference is not registered with any queue.`]
			],
			[/* parameters */
				[/* parameter */ 'referent', [/* parameter description */
					[/* text */ 't', `object the new soft reference will refer to`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object,java.lang.ref.ReferenceQueue)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new soft reference that refers to the given object and is
 registered with the given queue.`]
			],
			[/* parameters */
				[/* parameter */ 'referent', [/* parameter description */
					[/* text */ 't', `object the new soft reference will refer to`]
				]],
				[/* parameter */ 'q', [/* parameter description */
					[/* text */ 't', `the queue with which the reference is to be registered,
          or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if registration is not required`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'get()', [
			[/* method description */
				[/* text */ 't', `Returns this reference object's referent.  If this reference object has
 been cleared, either by the program or by the garbage collector, then
 this method returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The object to which this reference refers, or
           `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this reference object has been cleared`]
			]
		]]
	],
]);
