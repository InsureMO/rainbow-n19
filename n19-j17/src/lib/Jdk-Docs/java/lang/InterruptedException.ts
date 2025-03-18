import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.InterruptedException', [
	[/* class description */
		[/* text */ 't', `Thrown when a thread is waiting, sleeping, or otherwise occupied,
 and the thread is interrupted, either before or during the activity.
 Occasionally a method may wish to test whether the current
 thread has been interrupted, and if so, to immediately throw
 this exception.  The following code can be used to achieve
 this effect:
 `],
		[/* code block */ 'c', `  if (Thread.interrupted())  // Clears interrupted status!
      throw new InterruptedException();
 `]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InterruptedException`],
				[/* text */ 't', ` with no detail  message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `InterruptedException`],
				[/* text */ 't', ` with the
 specified detail message.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */,
	/* enum values */ UDF
]);
