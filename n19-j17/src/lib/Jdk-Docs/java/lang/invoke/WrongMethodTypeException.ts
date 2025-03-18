import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.invoke.WrongMethodTypeException', [
	[/* class description */
		[/* text */ 't', `Thrown to indicate that code has attempted to call a method handle
 via the wrong method type.  As with the bytecode representation of
 normal Java method calls, method handle calls are strongly typed
 to a specific type descriptor associated with a call site.
 `],
		[/* block */ 'b', `
 This exception may also be thrown when two method handles are
 composed, and the system detects that their types cannot be
 matched up correctly.  This amounts to an early evaluation
 of the type mismatch, at method handle construction time,
 instead of when the mismatched method handle is called.`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `WrongMethodTypeException`],
				[/* text */ 't', ` with no detail message.`]
			],
			/* parameters */,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a `],
				[/* inline code block */ 'i', `WrongMethodTypeException`],
				[/* text */ 't', ` with the specified
 detail message.`]
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
