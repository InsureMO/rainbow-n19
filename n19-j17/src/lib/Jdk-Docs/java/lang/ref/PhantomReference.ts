import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.PhantomReference', [
	[/* class description */
		[/* text */ 't', `Phantom reference objects, which are enqueued after the collector
 determines that their referents may otherwise be reclaimed.  Phantom
 references are most often used to schedule post-mortem cleanup actions.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Suppose the garbage collector determines at a certain point in time
 that an object is `],
			[/* reference */ 'r', `.package-summary#reachability`],
			[/* text */ 't', `.  At that time it will atomically clear
 all phantom references to that object and all phantom references to
 any other phantom-reachable objects from which that object is reachable.
 At the same time or at some later time it will enqueue those newly-cleared
 phantom references that are registered with reference queues.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', ` In order to ensure that a reclaimable object remains so, the referent of
 a phantom reference may not be retrieved: The `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` method of a
 phantom reference always returns `],
			[/* inline code block */ 'i', `null`],
			[/* text */ 't', `.
 The `],
			[/* reference */ 'r', `.Reference#refersTo(T)`],
			[/* text */ 't', ` method can be used to test
 whether some object is the referent of a phantom reference.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Object,java.lang.ref.ReferenceQueue)', [
			[/* constructor description */
				[/* text */ 't', `Creates a new phantom reference that refers to the given object and
 is registered with the given queue.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` It is possible to create a phantom reference with a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 queue.  Such a reference will never be enqueued.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'referent', [/* parameter description */
					[/* text */ 't', `the object the new phantom reference will refer to`]
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
				[/* text */ 't', `Returns this reference object's referent.  Because the referent of a
 phantom reference is always inaccessible, this method always returns
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
]);
