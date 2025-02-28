import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.ContentHandlerFactory', [
	[/* class description */
		[/* text */ 't', `This interface defines a factory for content handlers. An
 implementation of this interface should map a MIME type into an
 instance of `],
		[/* inline code block */ 'i', `ContentHandler`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 This interface is used by the `],
			[/* inline code block */ 'i', `URLStreamHandler`],
			[/* text */ 't', ` class
 to create a `],
			[/* inline code block */ 'i', `ContentHandler`],
			[/* text */ 't', ` for a MIME type.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'createContentHandler(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Creates a new `],
				[/* inline code block */ 'i', `ContentHandler`],
				[/* text */ 't', ` to read an object from
 a `],
				[/* inline code block */ 'i', `URLStreamHandler`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'mimetype', [/* parameter description */
					[/* text */ 't', `the MIME type for which a content handler is desired.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a new `],
				[/* inline code block */ 'i', `ContentHandler`],
				[/* text */ 't', ` to read an object from a
          `],
				[/* inline code block */ 'i', `URLStreamHandler`],
				[/* text */ 't', `.`]
			]
		]]
	],
]);
