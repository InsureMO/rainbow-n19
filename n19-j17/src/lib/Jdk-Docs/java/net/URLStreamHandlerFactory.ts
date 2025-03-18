import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URLStreamHandlerFactory', [
	[/* class description */
		[/* text */ 't', `This interface defines a factory for `],
		[/* inline code block */ 'i', `URL`],
		[/* text */ 't', ` stream
 protocol handlers.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` A URL stream handler factory is used as specified in the
 `],
			[/* reference */ 'r', `java.net.URL#<init>(java.lang.String,java.lang.String,int,java.lang.String)`, `URL constructor`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'createURLStreamHandler(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `URLStreamHandler`],
				[/* text */ 't', ` instance with the specified
 protocol.`]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the protocol ("`],
					[/* inline code block */ 'i', `ftp`],
					[/* text */ 't', `",
                     "`],
					[/* inline code block */ 'i', `http`],
					[/* text */ 't', `", "`],
					[/* inline code block */ 'i', `nntp`],
					[/* text */ 't', `", etc.).`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `URLStreamHandler`],
				[/* text */ 't', ` for the specific protocol, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if this factory cannot create a handler for the specific
          protocol`]
			]
		]]
	],
	/* enum values */ UDF
]);
