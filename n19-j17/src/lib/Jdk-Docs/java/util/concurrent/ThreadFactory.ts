import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.concurrent.ThreadFactory', [
	[/* class description */
		[/* text */ 't', `An object that creates new threads on demand.  Using thread factories
 removes hardwiring of calls to `],
		[/* external link */ 'a', `../../lang/Thread.html#%3Cinit%3E(java.lang.Runnable)`, `new Thread`],
		[/* text */ 't', `,
 enabling applications to use special thread subclasses, priorities, etc.

 `],
		[/* block */ 'b', `
 The simplest implementation of this interface is just:
 `],
		[/* code block */ 'c', [
			[/* inline code block */ 'i', `class SimpleThreadFactory implements ThreadFactory {
   public Thread newThread(Runnable r) {
     return new Thread(r);
   }
 }`]
		]],
		[/* text */ 't', `

 The `],
		[/* external link */ 'a', `Executors.html#defaultThreadFactory()`, `Executors.defaultThreadFactory()`],
		[/* text */ 't', ` method provides a more
 useful simple implementation, that sets the created thread context
 to known values before returning it.`],
		[/* block */ 'b', '']
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'newThread(java.lang.Runnable)', [
			[/* method description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `Thread`],
				[/* text */ 't', `.  Implementations may also initialize
 priority, name, daemon status, `],
				[/* inline code block */ 'i', `ThreadGroup`],
				[/* text */ 't', `, etc.`]
			],
			[/* parameters */
				[/* parameter */ 'r', [/* parameter description */
					[/* text */ 't', `a runnable to be executed by new thread instance`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `constructed thread, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if the request to
         create a thread is rejected`]
			]
		]]
	],
]);
