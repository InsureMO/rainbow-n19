import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.WeakReference', [
	[/* class description */
		[/* text */ 't', `Weak reference objects, which do not prevent their referents from being
 made finalizable, finalized, and then reclaimed.  Weak references are most
 often used to implement canonicalizing mappings.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Suppose that the garbage collector determines at a certain point in time
 that an object is `],
			[/* text */ 't', `weakly reachable`],
			[/* text */ 't', `.  At that time it will atomically clear all weak references to
 that object and all weak references to any other weakly-reachable objects
 from which that object is reachable through a chain of strong and soft
 references.  At the same time it will declare all of the formerly
 weakly-reachable objects to be finalizable.  At the same time or at some
 later time it will enqueue those newly-cleared weak references that are
 registered with reference queues.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new weak reference that refers to the given object.  The new
 reference is not registered with any queue.`]
			],
			[/* parameters */
				[/* parameter */ 'referent', [/* parameter description */
					[/* text */ 't', `object the new weak reference will refer to`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Object,java.lang.ref.ReferenceQueue)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new weak reference that refers to the given object and is
 registered with the given queue.`]
			],
			[/* parameters */
				[/* parameter */ 'referent', [/* parameter description */
					[/* text */ 't', `object the new weak reference will refer to`]
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
	/* methods */,
	/* enum values */ UDF
]);
