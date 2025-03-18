import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.ContentHandler', [
	[/* class description */
		[/* text */ 't', `The abstract class `],
		[/* inline code block */ 'i', `ContentHandler`],
		[/* text */ 't', ` is the superclass
 of all classes that read an `],
		[/* inline code block */ 'i', `Object`],
		[/* text */ 't', ` from a
 `],
		[/* inline code block */ 'i', `URLConnection`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 An application does not generally call the
 `],
			[/* inline code block */ 'i', `getContent`],
			[/* text */ 't', ` method in this class directly. Instead, an
 application calls the `],
			[/* inline code block */ 'i', `getContent`],
			[/* text */ 't', ` method in class
 `],
			[/* inline code block */ 'i', `URL`],
			[/* text */ 't', ` or in `],
			[/* inline code block */ 'i', `URLConnection`],
			[/* text */ 't', `.
 The application's content handler factory (an instance of a class that
 implements the interface `],
			[/* inline code block */ 'i', `ContentHandlerFactory`],
			[/* text */ 't', ` set up by a call to
 `],
			[/* reference */ 'r', `java.net.URLConnection#setContentHandlerFactory(java.net.ContentHandlerFactory)`, `setContentHandlerFactory`],
			[/* text */ 't', ` is called with a `],
			[/* inline code block */ 'i', `String`],
			[/* text */ 't', ` giving the
 MIME type of the object being received on the socket. The factory returns an
 instance of a subclass of `],
			[/* inline code block */ 'i', `ContentHandler`],
			[/* text */ 't', `, and its
 `],
			[/* inline code block */ 'i', `getContent`],
			[/* text */ 't', ` method is called to create the object.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If no content handler could be `],
			[/* reference */ 'r', `java.net.URLConnection#getContent()`, `found`],
			[/* text */ 't', `,
 URLConnection will look for a content handler in a user-definable set of places.
 Users can define a vertical-bar delimited set of class prefixes
 to search through by defining the `],
			[/* text */ 't', `"java.content.handler.pkgs"`],
			[/* text */ 't', `
 property. The class name must be of the form:
 `]
		]],
		[/* blockquote */ 'q', [
			[/* text */ 't', `
     `],
			[/* text */ 't', `{package-prefix}.{major}.{minor}`],
			[/* text */ 't', `
     `],
			[/* block */ 'b', [
				[/* text */ 't', `
     where `],
				[/* text */ 't', `{major}.{minor}`],
				[/* text */ 't', ` is formed by taking the
     content-type string, replacing all slash characters with a
     `],
				[/* inline code block */ 'i', `period`],
				[/* text */ 't', ` ('.'), and all other non-alphanumeric characters
     with the underscore character '`],
				[/* inline code block */ 'i', `_`],
				[/* text */ 't', `'. The alphanumeric
     characters are specifically the 26 uppercase ASCII letters
     '`],
				[/* inline code block */ 'i', `A`],
				[/* text */ 't', `' through '`],
				[/* inline code block */ 'i', `Z`],
				[/* text */ 't', `', the 26 lowercase ASCII
     letters '`],
				[/* inline code block */ 'i', `a`],
				[/* text */ 't', `' through '`],
				[/* inline code block */ 'i', `z`],
				[/* text */ 't', `', and the 10 ASCII
     digits '`],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `' through '`],
				[/* inline code block */ 'i', `9`],
				[/* text */ 't', `'.
     `]
			]],
			[/* block */ 'b', `
     e.g.
     YoyoDyne.experimental.text.plain
 `]
		]],
		[/* text */ 't', `
 If no user-defined content handler is found, then the system
 tries to load a specific `],
		[/* text */ 't', `content-type`],
		[/* text */ 't', ` handler from one
 of the built-in handlers, if one exists.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 If the loading of the content handler class would be performed by
 a classloader that is outside of the delegation chain of the caller,
 the JVM will need the RuntimePermission "getClassLoader".`]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getContent(java.net.URLConnection)', [
			[/* method description */
				[/* text */ 't', `Given a URL connect stream positioned at the beginning of the
 representation of an object, this method reads that stream and
 creates an object from it.`]
			],
			[/* parameters */
				[/* parameter */ 'urlc', [/* parameter description */
					[/* text */ 't', `a URL connection.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while reading the object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object read by the `],
				[/* inline code block */ 'i', `ContentHandler`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getContent(java.net.URLConnection,java.lang.Class[])', [
			[/* method description */
				[/* text */ 't', `Given a URL connect stream positioned at the beginning of the
 representation of an object, this method reads that stream and
 creates an object that matches one of the types specified.

 The default implementation of this method should call
 `],
				[/* reference */ 'r', `#getContent(java.net.URLConnection)`, `getContent(URLConnection)`],
				[/* text */ 't', `
 and screen the return type for a match of the suggested types.`]
			],
			[/* parameters */
				[/* parameter */ 'urlc', [/* parameter description */
					[/* text */ 't', `a URL connection.`]
				]],
				[/* parameter */ 'classes', [/* parameter description */
					[/* text */ 't', `an array of types requested`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while reading the object.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object read by the `],
				[/* inline code block */ 'i', `ContentHandler`],
				[/* text */ 't', ` that is
                 the first match of the suggested types or
                 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if none of the requested  are supported.`]
			]
		]]
	],
	/* enum values */ UDF
]);
