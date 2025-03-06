import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.ExceptionInInitializerError', [
	[/* class description */
		[/* text */ 't', `Signals that an unexpected exception has occurred in a static initializer.
 An `],
		[/* inline code block */ 'i', `ExceptionInInitializerError`],
		[/* text */ 't', ` is thrown to indicate that an
 exception occurred during evaluation of a static initializer or the
 initializer for a static variable.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExceptionInInitializerError`],
				[/* text */ 't', ` with
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` as its detail message string and with no saved
 throwable object.
 A detail message is a String that describes this particular exception.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `ExceptionInInitializerError`],
				[/* text */ 't', ` with the specified detail
 message string.  A detail message is a String that describes this
 particular exception. The detail message string is saved for later
 retrieval by the `],
				[/* reference */ 'r', `java.lang.Throwable#getMessage()`, `Throwable.getMessage()`],
				[/* text */ 't', ` method. There is no
 saved throwable object.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new `],
				[/* inline code block */ 'i', `ExceptionInInitializerError`],
				[/* text */ 't', ` class by
 saving a reference to the `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` object thrown for
 later retrieval by the `],
				[/* reference */ 'r', `#getException()`, `getException()`],
				[/* text */ 't', ` method. The detail
 message string is set to `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'thrown', [/* parameter description */
					[/* text */ 't', `The exception thrown`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getException()', [
			[/* method description */
				[/* text */ 't', `Returns the exception that occurred during a static initialization that
 caused this error to be created.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the saved throwable object of this
         `],
				[/* inline code block */ 'i', `ExceptionInInitializerError`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
         if this `],
				[/* inline code block */ 'i', `ExceptionInInitializerError`],
				[/* text */ 't', ` has no saved
         throwable object.`]
			]
		]]
	],
]);
