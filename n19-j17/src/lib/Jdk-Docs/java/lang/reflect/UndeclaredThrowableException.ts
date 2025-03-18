import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.UndeclaredThrowableException', [
	[/* class description */
		[/* text */ 't', `Thrown by a method invocation on a proxy instance if its invocation
 handler's `],
		[/* reference */ 'r', `java.lang.reflect.InvocationHandler#invoke(java.lang.Object,java.lang.reflect.Method,java.lang.Object[])`, `invoke`],
		[/* text */ 't', ` method throws a
 checked exception (a `],
		[/* inline code block */ 'i', `Throwable`],
		[/* text */ 't', ` that is not assignable
 to `],
		[/* inline code block */ 'i', `RuntimeException`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `Error`],
		[/* text */ 't', `) that
 is not assignable to any of the exception types declared in the
 `],
		[/* inline code block */ 'i', `throws`],
		[/* text */ 't', ` clause of the method that was invoked on the
 proxy instance and dispatched to the invocation handler.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `An `],
			[/* inline code block */ 'i', `UndeclaredThrowableException`],
			[/* text */ 't', ` instance contains
 the undeclared checked exception that was thrown by the invocation
 handler, and it can be retrieved with the
 `],
			[/* inline code block */ 'i', `getUndeclaredThrowable()`],
			[/* text */ 't', ` method.
 `],
			[/* inline code block */ 'i', `UndeclaredThrowableException`],
			[/* text */ 't', ` extends
 `],
			[/* inline code block */ 'i', `RuntimeException`],
			[/* text */ 't', `, so it is an unchecked exception
 that wraps a checked exception.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `UndeclaredThrowableException`],
				[/* text */ 't', ` with the
 specified `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'undeclaredThrowable', [/* parameter description */
					[/* text */ 't', `the undeclared checked exception
          that was thrown`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.Throwable,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs an `],
				[/* inline code block */ 'i', `UndeclaredThrowableException`],
				[/* text */ 't', ` with the
 specified `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` and a detail message.`]
			],
			[/* parameters */
				[/* parameter */ 'undeclaredThrowable', [/* parameter description */
					[/* text */ 't', `the undeclared checked exception
          that was thrown`]
				]],
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getUndeclaredThrowable()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance wrapped in this
 `],
				[/* inline code block */ 'i', `UndeclaredThrowableException`],
				[/* text */ 't', `, which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the undeclared checked exception that was thrown`]
			]
		]]
	],
	/* enum values */ UDF
]);
