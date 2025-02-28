import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.AutoCloseable', [
	[/* class description */
		[/* text */ 't', `An object that may hold resources (such as file or socket handles)
 until it is closed. The `],
		[/* reference */ 'r', `close()`],
		[/* text */ 't', ` method of an `],
		[/* inline code block */ 'i', `AutoCloseable`],
		[/* text */ 't', `
 object is called automatically when exiting a `],
		[/* inline code block */ 'i', `try`],
		[/* text */ 't', `-with-resources block for which the object has been declared in
 the resource specification header. This construction ensures prompt
 release, avoiding resource exhaustion exceptions and errors that
 may otherwise occur.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes this resource, relinquishing any underlying resources.
 This method is invoked automatically on objects managed by the
 `],
				[/* inline code block */ 'i', `try`],
				[/* text */ 't', `-with-resources statement.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.Exception', [/* throw description */
					[/* text */ 't', `if this resource cannot be closed`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
