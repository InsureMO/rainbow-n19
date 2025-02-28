import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.IOError', [
	[/* class description */
		[/* text */ 't', `Thrown when a serious I/O error has occurred.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.Throwable)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a new instance of IOError with the specified cause. The
 IOError is created with the detail message of
 `],
				[/* inline code block */ 'i', `(cause==null ? null : cause.toString())`],
				[/* text */ 't', ` (which typically
 contains the class and detail message of cause).`]
			],
			[/* parameters */
				[/* parameter */ 'cause', [/* parameter description */
					[/* text */ 't', `The cause of this error, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if the cause
         is not known`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
