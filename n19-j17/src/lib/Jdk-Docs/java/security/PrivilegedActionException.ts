import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.security.PrivilegedActionException', [
	[/* class description */
		[/* text */ 't', `This exception is thrown by
 `],
		[/* inline code block */ 'i', `doPrivileged(PrivilegedExceptionAction)`],
		[/* text */ 't', ` and
 `],
		[/* inline code block */ 'i', `doPrivileged(PrivilegedExceptionAction, AccessControlContext context)`],
		[/* text */ 't', ` to indicate
 that the action being performed threw a checked exception.  The exception
 thrown by the action can be obtained by calling the
 `],
		[/* inline code block */ 'i', `getException`],
		[/* text */ 't', ` method.  In effect, an
 `],
		[/* inline code block */ 'i', `PrivilegedActionException`],
		[/* text */ 't', ` is a "wrapper"
 for an exception thrown by a privileged action.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Exception)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new PrivilegedActionException "wrapping"
 the specific Exception.`]
			],
			[/* parameters */
				[/* parameter */ 'exception', [/* parameter description */
					[/* text */ 't', `The exception thrown`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'toString()', UDF],
		[/* method */ 'getException()', [
			[/* method description */
				[/* text */ 't', `Returns the exception thrown by the privileged computation that
 resulted in this `],
				[/* inline code block */ 'i', `PrivilegedActionException`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the exception thrown by the privileged computation that
         resulted in this `],
				[/* inline code block */ 'i', `PrivilegedActionException`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
