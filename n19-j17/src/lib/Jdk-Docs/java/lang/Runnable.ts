import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Runnable', [
	[/* class description */
		[/* text */ 't', `The `],
		[/* inline code block */ 'i', `Runnable`],
		[/* text */ 't', ` interface should be implemented by any
 class whose instances are intended to be executed by a thread. The
 class must define a method of no arguments called `],
		[/* inline code block */ 'i', `run`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface is designed to provide a common protocol for objects that
 wish to execute code while they are active. For example,
 `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` is implemented by class `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `.
 Being active simply means that a thread has been started and has not
 yet been stopped.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In addition, `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` provides the means for a class to be
 active while not subclassing `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `. A class that implements
 `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` can run without subclassing `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', `
 by instantiating a `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', ` instance and passing itself in
 as the target.  In most cases, the `],
			[/* inline code block */ 'i', `Runnable`],
			[/* text */ 't', ` interface should
 be used if you are only planning to override the `],
			[/* inline code block */ 'i', `run()`],
			[/* text */ 't', `
 method and no other `],
			[/* inline code block */ 'i', `Thread`],
			[/* text */ 't', ` methods.
 This is important because classes should not be subclassed
 unless the programmer intends on modifying or enhancing the fundamental
 behavior of the class.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'run()', [
			[/* method description */
				[/* text */ 't', `When an object implementing interface `],
				[/* inline code block */ 'i', `Runnable`],
				[/* text */ 't', ` is used
 to create a thread, starting the thread causes the object's
 `],
				[/* inline code block */ 'i', `run`],
				[/* text */ 't', ` method to be called in that separately executing
 thread.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The general contract of the method `],
					[/* inline code block */ 'i', `run`],
					[/* text */ 't', ` is that it may
 take any action whatsoever.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]]
	],
]);
