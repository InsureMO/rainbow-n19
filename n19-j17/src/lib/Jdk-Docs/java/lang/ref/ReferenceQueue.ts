import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.ReferenceQueue', [
	[/* class description */
		[/* text */ 't', `Reference queues, to which registered reference objects are appended by the
 garbage collector after the appropriate reachability changes are detected.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new reference-object queue.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'poll()', [
			[/* method description */
				[/* text */ 't', `Polls this queue to see if a reference object is available.  If one is
 available without further delay then it is removed from the queue and
 returned.  Otherwise this method immediately returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `A reference object, if one was immediately available,
          otherwise `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'remove()', [
			[/* method description */
				[/* text */ 't', `Removes the next reference object in this queue, blocking until one
 becomes available.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `If the wait is interrupted`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference object, blocking until one becomes available`]
			]
		]],
		[/* method */ 'remove(long)', [
			[/* method description */
				[/* text */ 't', `Removes the next reference object in this queue, blocking until either
 one becomes available or the given timeout period expires.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` This method does not offer real-time guarantees: It schedules the
 timeout as if by invoking the `],
					[/* reference */ 'r', `java.lang.Object#wait(long)`, `Object.wait(long)`],
					[/* text */ 't', ` method.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `If positive, block for up to `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', `
                  milliseconds while waiting for a reference to be
                  added to this queue.  If zero, block indefinitely.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `If the value of the timeout argument is negative`]
				]],
				[/* throw */ 'java.lang.InterruptedException', [/* throw description */
					[/* text */ 't', `If the timeout wait is interrupted`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A reference object, if one was available within the specified
          timeout period, otherwise `],
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
	/* enum values */ UDF
]);
