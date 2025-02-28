import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.WriteAbortedException', [
	[/* class description */
		[/* text */ 't', `Signals that one of the ObjectStreamExceptions was thrown during a
 write operation.  Thrown during a read operation when one of the
 ObjectStreamExceptions was thrown during a write operation.  The
 exception that terminated the write can be found in the detail
 field. The stream is reset to it's initial state and all references
 to objects already deserialized are discarded.`]
	],
	[/* fields */
		[/* field */ 'detail', [
			[/* field description */
				[/* text */ 't', `Exception that was caught while writing the ObjectStream.`]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Exception)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a WriteAbortedException with a string describing
 the exception and the exception causing the abort.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `String describing the exception.`]
				]],
				[/* parameter */ 'ex', [/* parameter description */
					[/* text */ 't', `Exception causing the abort.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getCause()', [
			[/* method description */
				[/* text */ 't', `Returns the exception that terminated the operation (the `],
				[/* text */ 't', `cause`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exception that terminated the operation (the `],
				[/* text */ 't', `cause`],
				[/* text */ 't', `),
          which may be null.`]
			]
		]],
		[/* method */ 'getMessage()', [
			[/* method description */
				[/* text */ 't', `Produce the message and include the message from the nested
 exception, if there is one.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the detail message string of this `],
				[/* inline code block */ 'i', `Throwable`],
				[/* text */ 't', ` instance
          (which may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `).`]
			]
		]]
	],
]);
