import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URL', [
	[/* class description */
		[/* text */ 't', `Class `],
		[/* inline code block */ 'i', `URL`],
		[/* text */ 't', ` represents a Uniform Resource
 Locator, a pointer to a "resource" on the World
 Wide Web. A resource can be something as simple as a file or a
 directory, or it can be a reference to a more complicated object,
 such as a query to a database or to a search engine. More
 information on the types of URLs and their formats can be found at:
 `],
		[/* external link */ 'a', `http://web.archive.org/web/20051219043731/http://archive.ncsa.uiuc.edu/SDG/Software/Mosaic/Demo/url-primer.html`, `Types of URL`],
		[/* block */ 'b', `
 In general, a URL can be broken into several parts. Consider the
 following example:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     http://www.example.com/docs/resource1.html
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The URL above indicates that the protocol to use is
 `],
			[/* inline code block */ 'i', `http`],
			[/* text */ 't', ` (HyperText Transfer Protocol) and that the
 information resides on a host machine named
 `],
			[/* inline code block */ 'i', `www.example.com`],
			[/* text */ 't', `. The information on that host
 machine is named `],
			[/* inline code block */ 'i', `/docs/resource1.html`],
			[/* text */ 't', `. The exact
 meaning of this name on the host machine is both protocol
 dependent and host dependent. The information normally resides in
 a file, but it could be generated on the fly. This component of
 the URL is called the `],
			[/* text */ 't', `path`],
			[/* text */ 't', ` component.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 A URL can optionally specify a "port", which is the
 port number to which the TCP connection is made on the remote host
 machine. If the port is not specified, the default port for
 the protocol is used instead. For example, the default port for
 `],
			[/* inline code block */ 'i', `http`],
			[/* text */ 't', ` is `],
			[/* inline code block */ 'i', `80`],
			[/* text */ 't', `. An alternative port could be
 specified as:
 `]
		]],
		[/* block */ 'b', [
			[/* code block */ 'c', `     http://www.example.com:1080/docs/resource1.html
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 The syntax of `],
			[/* inline code block */ 'i', `URL`],
			[/* text */ 't', ` is defined by  `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2396.txt`, `RFC 2396: Uniform Resource Identifiers (URI): Generic Syntax`],
			[/* text */ 't', `, amended by `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2732.txt`, `RFC 2732: Format for Literal IPv6 Addresses in URLs`],
			[/* text */ 't', `. The Literal IPv6 address format
 also supports scope_ids. The syntax and usage of scope_ids is described
 `],
			[/* external link */ 'a', `Inet6Address.html#scoped`, `here`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', `
 A URL may have appended to it a "fragment", also known
 as a "ref" or a "reference". The fragment is indicated by the sharp
 sign character "#" followed by more characters. For example,
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     http://www.example.com/index.html#chapter1
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 This fragment is not technically part of the URL. Rather, it
 indicates that after the specified resource is retrieved, the
 application is specifically interested in that part of the
 document that has the tag `],
			[/* inline code block */ 'i', `chapter1`],
			[/* text */ 't', ` attached to it. The
 meaning of a tag is resource specific.
 `]
		]],
		[/* block */ 'b', `
 An application can also specify a "relative URL",
 which contains only enough information to reach the resource
 relative to another URL. Relative URLs are frequently used within
 HTML pages. For example, if the contents of the URL:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     http://www.example.com/index.html
 `]
		]],
		[/* text */ 't', `
 contained within it the relative URL:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     FAQ.html
 `]
		]],
		[/* text */ 't', `
 it would be a shorthand for:
 `],
		[/* block */ 'b', [
			[/* code block */ 'c', `     http://www.example.com/FAQ.html
 `]
		]],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The relative URL need not specify all the components of a URL. If
 the protocol, host name, or port number is missing, the value is
 inherited from the fully specified URL. The file component must be
 specified. The optional fragment is not inherited.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 The URL class does not itself encode or decode any URL components
 according to the escaping mechanism defined in RFC2396. It is the
 responsibility of the caller to encode any fields, which need to be
 escaped prior to calling URL, and also to decode any escaped fields,
 that are returned from URL. Furthermore, because URL has no knowledge
 of URL escaping, it does not recognise equivalence between the encoded
 or decoded form of the same URL. For example, the two URLs:`],
			[/* new line */ 'n']
		]],
		[/* code block */ 'c', `    http://foo.com/hello world/ and http://foo.com/hello%20world`],
		[/* text */ 't', `
 would be considered not equal to each other.
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Note, the `],
			[/* reference */ 'r', `java.net.URI`],
			[/* text */ 't', ` class does perform escaping of its
 component fields in certain circumstances. The recommended way
 to manage the encoding and decoding of URLs is to use `],
			[/* reference */ 'r', `java.net.URI`],
			[/* text */ 't', `,
 and to convert between these two classes using `],
			[/* reference */ 'r', `toURI()`],
			[/* text */ 't', ` and
 `],
			[/* external link */ 'a', `URI.html#toURL()`, `URI.toURL()`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 The `],
			[/* reference */ 'r', `java.net.URLEncoder`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.net.URLDecoder`],
			[/* text */ 't', ` classes can also be
 used, but only for HTML form encoding, which is not the same
 as the encoding scheme defined in RFC2396.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.net.URL,java.lang.String,java.net.URLStreamHandler)', [
			[/* constructor description */
				[/* text */ 't', `Creates a URL by parsing the given spec with the specified handler
 within a specified context. If the handler is null, the parsing
 occurs as with the two argument constructor.`]
			],
			[/* parameters */
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `the context in which to parse the specification.`]
				]],
				[/* parameter */ 'spec', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to parse as a URL.`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `the stream handler for the URL.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if no protocol is specified, or an
               unknown protocol is found, or `],
					[/* inline code block */ 'i', `spec`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
               or the parsed URL fails to comply with the specific syntax
               of the associated protocol.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        specifying a stream handler.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.net.URL,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a URL by parsing the given spec within a specified context.

 The new URL is created from the given context URL and the spec
 argument as described in
 RFC2396 "Uniform Resource Identifiers : Generic * Syntax" :
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `          &lt;scheme&gt;://&lt;authority&gt;&lt;path&gt;?&lt;query&gt;#&lt;fragment&gt;
 `]
				]],
				[/* text */ 't', `
 The reference is parsed into the scheme, authority, path, query and
 fragment parts. If the path component is empty and the scheme,
 authority, and query components are undefined, then the new URL is a
 reference to the current document. Otherwise, the fragment and query
 parts present in the spec are used in the new URL.
 `],
				[/* block */ 'b', `
 If the scheme component is defined in the given spec and does not match
 the scheme of the context, then the new URL is created as an absolute
 URL based on the spec alone. Otherwise the scheme component is inherited
 from the context URL.
 `],
				[/* block */ 'b', `
 If the authority component is present in the spec then the spec is
 treated as absolute and the spec authority and path will replace the
 context authority and path. If the authority component is absent in the
 spec then the authority of the new URL will be inherited from the
 context.
 `],
				[/* block */ 'b', `
 If the spec's path component begins with a slash character
 "/" then the
 path is treated as absolute and the spec path replaces the context path.
 `],
				[/* block */ 'b', `
 Otherwise, the path is treated as a relative path and is appended to the
 context path, as described in RFC2396. Also, in this case,
 the path is canonicalized through the removal of directory
 changes made by occurrences of ".." and ".".
 `],
				[/* block */ 'b', `
 For a more detailed description of URL parsing, refer to RFC2396.`]
			],
			[/* parameters */
				[/* parameter */ 'context', [/* parameter description */
					[/* text */ 't', `the context in which to parse the specification.`]
				]],
				[/* parameter */ 'spec', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to parse as a URL.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if no protocol is specified, or an
               unknown protocol is found, or `],
					[/* inline code block */ 'i', `spec`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
               or the parsed URL fails to comply with the specific syntax
               of the associated protocol.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object from the `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `
 representation.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This constructor is equivalent to a call to the two-argument
 constructor with a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` first argument.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'spec', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` to parse as a URL.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if no protocol is specified, or an
               unknown protocol is found, or `],
					[/* inline code block */ 'i', `spec`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `,
               or the parsed URL fails to comply with the specific syntax
               of the associated protocol.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,int,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object from the specified
 `],
				[/* inline code block */ 'i', `protocol`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `host`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `port`],
				[/* text */ 't', `
 number, and `],
				[/* inline code block */ 'i', `file`],
				[/* text */ 't', `.`],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` can be expressed as a host name or a literal
 IP address. If IPv6 literal address is used, it should be
 enclosed in square brackets (`],
					[/* inline code block */ 'i', `'['`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `']'`],
					[/* text */ 't', `), as
 specified by `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2732.txt`, `RFC 2732`],
					[/* text */ 't', `;
 However, the literal IPv6 address format defined in `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373: IP Version 6 Addressing Architecture`],
					[/* text */ 't', ` is also accepted.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 Specifying a `],
					[/* inline code block */ 'i', `port`],
					[/* text */ 't', ` number of `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 indicates that the URL should use the default port for the
 protocol.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `

 If this is the first URL object being created with the specified
 protocol, a `],
					[/* text */ 't', `stream protocol handler`],
					[/* text */ 't', ` object, an instance of
 class `],
					[/* inline code block */ 'i', `URLStreamHandler`],
					[/* text */ 't', `, is created for that protocol:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the application has previously set up an instance of
     `],
						[/* inline code block */ 'i', `URLStreamHandlerFactory`],
						[/* text */ 't', ` as the stream handler factory,
     then the `],
						[/* inline code block */ 'i', `createURLStreamHandler`],
						[/* text */ 't', ` method of that instance
     is called with the protocol string as an argument to create the
     stream protocol handler.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If no `],
						[/* inline code block */ 'i', `URLStreamHandlerFactory`],
						[/* text */ 't', ` has yet been set up,
     or if the factory's `],
						[/* inline code block */ 'i', `createURLStreamHandler`],
						[/* text */ 't', ` method
     returns `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, then the `],
						[/* reference */ 'r', `java.util.ServiceLoader`],
						[/* text */ 't', ` mechanism is used to locate `],
						[/* reference */ 'r', `java.net.spi.URLStreamHandlerProvider`],
						[/* text */ 't', `
     implementations using the system class
     loader. The order that providers are located is implementation
     specific, and an implementation is free to cache the located
     providers. A `],
						[/* reference */ 'r', `java.util.ServiceConfigurationError`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `Error`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `RuntimeException`],
						[/* text */ 't', `
     thrown from the `],
						[/* inline code block */ 'i', `createURLStreamHandler`],
						[/* text */ 't', `, if encountered, will
     be propagated to the calling thread. The `],
						[/* inline code block */ 'i', `createURLStreamHandler`],
						[/* text */ 't', ` method of each provider, if instantiated, is
     invoked, with the protocol string, until a provider returns non-null,
     or all providers have been exhausted.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the previous step fails to find a protocol handler, the
     constructor reads the value of the system property:
     `],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `java.protocol.handler.pkgs`]
						]],
						[/* text */ 't', `
     If the value of that system property is not `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `,
     it is interpreted as a list of packages separated by a vertical
     slash character '`],
						[/* inline code block */ 'i', `|`],
						[/* text */ 't', `'. The constructor tries to load
     the class named:
     `],
						[/* block */ 'b', [
							[/* inline code block */ 'i', `<package>.<protocol>.Handler`]
						]],
						[/* text */ 't', `
     where `],
						[/* inline code block */ 'i', `<package>`],
						[/* text */ 't', ` is replaced by the name of the package
     and `],
						[/* inline code block */ 'i', `<protocol>`],
						[/* text */ 't', ` is replaced by the name of the protocol.
     If this class does not exist, or if the class exists but it is not
     a subclass of `],
						[/* inline code block */ 'i', `URLStreamHandler`],
						[/* text */ 't', `, then the next package
     in the list is tried.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If the previous step fails to find a protocol handler, then the
     constructor tries to load a built-in protocol handler.
     If this class does not exist, or if the class exists but it is not a
     subclass of `],
						[/* inline code block */ 'i', `URLStreamHandler`],
						[/* text */ 't', `, then a
     `],
						[/* inline code block */ 'i', `MalformedURLException`],
						[/* text */ 't', ` is thrown.
 `]
					]]
				]],
				[/* block */ 'b', ''],
				[/* block */ 'b', `Protocol handlers for the following protocols are guaranteed
 to exist on the search path:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* inline code block */ 'i', `http`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `https`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `file`]
					]],
					[/* block */ 'b', [
						[/* inline code block */ 'i', `jar`]
					]]
				]],
				[/* text */ 't', `
 Protocol handlers for additional protocols may also be  available.
 Some protocol handlers, for example those used for loading platform
 classes or classes on the class path, may not be overridden. The details
 of such restrictions, and when those restrictions apply (during
 initialization of the runtime for example), are implementation specific
 and therefore not specified

 `],
				[/* block */ 'b', ''],
				[/* block */ 'b', `No validation of the inputs is performed by this constructor.`]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the name of the protocol to use.`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the name of the host.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the port number on the host.`]
				]],
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file on the host`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if an unknown protocol or the port
                  is a negative number other than -1`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Creates a URL from the specified `],
				[/* inline code block */ 'i', `protocol`],
				[/* text */ 't', `
 name, `],
				[/* inline code block */ 'i', `host`],
				[/* text */ 't', ` name, and `],
				[/* inline code block */ 'i', `file`],
				[/* text */ 't', ` name. The
 default port for the specified protocol is used.
 `],
				[/* block */ 'b', `
 This constructor is equivalent to the four-argument
 constructor with the only difference of using the
 default port for the specified protocol.

 No validation of the inputs is performed by this constructor.`]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the name of the protocol to use.`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the name of the host.`]
				]],
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file on the host.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if an unknown protocol is specified.`]
				]]
			]
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.String,int,java.lang.String,java.net.URLStreamHandler)', [
			[/* constructor description */
				[/* text */ 't', `Creates a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object from the specified
 `],
				[/* inline code block */ 'i', `protocol`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `host`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `port`],
				[/* text */ 't', `
 number, `],
				[/* inline code block */ 'i', `file`],
				[/* text */ 't', `, and `],
				[/* inline code block */ 'i', `handler`],
				[/* text */ 't', `. Specifying
 a `],
				[/* inline code block */ 'i', `port`],
				[/* text */ 't', ` number of `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` indicates that
 the URL should use the default port for the protocol. Specifying
 a `],
				[/* inline code block */ 'i', `handler`],
				[/* text */ 't', ` of `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` indicates that the URL
 should use a default stream handler for the protocol, as outlined
 for:
     `],
				[/* reference */ 'r', `URL(java.lang.String, java.lang.String, int, java.lang.String)`],
				[/* block */ 'b', [
					[/* text */ 't', `If the handler is not null and there is a security manager,
 the security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', `
 method is called with a
 `],
					[/* inline code block */ 'i', `NetPermission("specifyStreamHandler")`],
					[/* text */ 't', ` permission.
 This may result in a SecurityException.

 No validation of the inputs is performed by this constructor.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the name of the protocol to use.`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the name of the host.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the port number on the host.`]
				]],
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file on the host`]
				]],
				[/* parameter */ 'handler', [/* parameter description */
					[/* text */ 't', `the stream handler for the URL.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.MalformedURLException', [/* throw description */
					[/* text */ 't', `if an unknown protocol or the port
                    is a negative number other than -1`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
        `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method doesn't allow
        specifying a stream handler explicitly.`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this URL for equality with another object.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 If the given object is not a URL then this method immediately returns
 `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]],
				[/* block */ 'b', `

 Two URL objects are equal if they have the same protocol, reference
 equivalent hosts, have the same port number on the host, and the same
 file and fragment of the file.`],
				[/* block */ 'b', `

 Two hosts are considered equivalent if both host names can be resolved
 into the same IP addresses; else if either host name can't be
 resolved, the host names must be equal without regard to case; or both
 host names equal to null.`],
				[/* block */ 'b', `

 Since hosts comparison requires name resolution, this operation is a
 blocking operation. `],
				[/* block */ 'b', [
					[/* text */ 't', `

 Note: The defined behavior for `],
					[/* inline code block */ 'i', `equals`],
					[/* text */ 't', ` is known to
 be inconsistent with virtual hosting in HTTP.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the URL to compare against.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Constructs a string representation of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `. The
 string is created by calling the `],
				[/* inline code block */ 'i', `toExternalForm`],
				[/* text */ 't', `
 method of the stream protocol handler for this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Creates an integer suitable for hash table indexing.`],
				[/* block */ 'b', `

 The hash code is based upon all the URL components relevant for URL
 comparison. As such, this operation is a blocking operation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code for this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'openStream()', [
			[/* method description */
				[/* text */ 't', `Opens a connection to this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` and returns an
 `],
				[/* inline code block */ 'i', `InputStream`],
				[/* text */ 't', ` for reading from that connection. This
 method is a shorthand for:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `     openConnection().getInputStream()
 `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an input stream for reading from the URL connection.`]
			]
		]],
		[/* method */ 'getHost()', [
			[/* method description */
				[/* text */ 't', `Gets the host name of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `, if applicable.
 The format of the host conforms to RFC 2732, i.e. for a
 literal IPv6 address, this method will return the IPv6 address
 enclosed in square brackets (`],
				[/* inline code block */ 'i', `'['`],
				[/* text */ 't', ` and `],
				[/* inline code block */ 'i', `']'`],
				[/* text */ 't', `).`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the host name of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getPort()', [
			[/* method description */
				[/* text */ 't', `Gets the port number of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the port number, or -1 if the port is not set`]
			]
		]],
		[/* method */ 'getDefaultPort()', [
			[/* method description */
				[/* text */ 't', `Gets the default port number of the protocol associated
 with this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `. If the URL scheme or the URLStreamHandler
 for the URL do not define a default port number,
 then -1 is returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the port number`]
			]
		]],
		[/* method */ 'sameFile(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Compares two URLs, excluding the fragment component.`],
				[/* block */ 'b', [
					[/* text */ 't', `

 Returns `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` if this `],
					[/* inline code block */ 'i', `URL`],
					[/* text */ 't', ` and the
 `],
					[/* inline code block */ 'i', `other`],
					[/* text */ 't', ` argument are equal without taking the
 fragment component into consideration.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `URL`],
					[/* text */ 't', ` to compare against.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if they reference the same remote object;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'toExternalForm()', [
			[/* method description */
				[/* text */ 't', `Constructs a string representation of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `. The
 string is created by calling the `],
				[/* inline code block */ 'i', `toExternalForm`],
				[/* text */ 't', `
 method of the stream protocol handler for this object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object.`]
			]
		]],
		[/* method */ 'openConnection()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.net.URLConnection`],
				[/* text */ 't', ` instance that
 represents a connection to the remote object referred to by the
 `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `A new instance of `],
					[/* reference */ 'r', `java.net.URLConnection`],
					[/* text */ 't', ` is
 created every time when invoking the
 `],
					[/* external link */ 'a', `URLStreamHandler.html#openConnection(java.net.URL)`, `URLStreamHandler.openConnection(URL)`],
					[/* text */ 't', ` method of the protocol handler for
 this URL.`]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `It should be noted that a URLConnection instance does not establish
 the actual network connection on creation. This will happen only when
 calling `],
					[/* external link */ 'a', `URLConnection.html#connect()`, `URLConnection.connect()`],
					[/* text */ 't', `.`]
				]],
				[/* block */ 'b', `If for the URL's protocol (such as HTTP or JAR), there
 exists a public, specialized URLConnection subclass belonging
 to one of the following packages or one of their subpackages:
 java.lang, java.io, java.util, java.net, the connection
 returned will be of that subclass. For example, for HTTP an
 HttpURLConnection will be returned, and for JAR a
 JarURLConnection will be returned.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.net.URLConnection`],
				[/* text */ 't', ` linking
             to the URL.`]
			]
		]],
		[/* method */ 'openConnection(java.net.Proxy)', [
			[/* method description */
				[/* text */ 't', `Same as `],
				[/* reference */ 'r', `openConnection()`],
				[/* text */ 't', `, except that the connection will be
 made through the specified proxy; Protocol handlers that do not
 support proxying will ignore the proxy parameter and make a
 normal connection.

 Invoking this method preempts the system's default
 `],
				[/* reference */ 'r', `java.net.ProxySelector`],
				[/* text */ 't', ` settings.`]
			],
			[/* parameters */
				[/* parameter */ 'proxy', [/* parameter description */
					[/* text */ 't', `the Proxy through which this connection
             will be made. If direct connection is desired,
             Proxy.NO_PROXY should be specified.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager is present
             and the caller doesn't have permission to connect
             to the proxy.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `will be thrown if proxy is null,
             or proxy has the wrong type`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the subclass that
             implements the protocol handler doesn't support
             this method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` to the URL.`]
			]
		]],
		[/* method */ 'getContent()', [
			[/* method description */
				[/* text */ 't', `Gets the contents of this URL. This method is a shorthand for:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `     openConnection().getContent()
 `]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the contents of this URL.`]
			]
		]],
		[/* method */ 'getContent(java.lang.Class[])', [
			[/* method description */
				[/* text */ 't', `Gets the contents of this URL. This method is a shorthand for:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', `     openConnection().getContent(classes)
 `]
				]]
			],
			[/* parameters */
				[/* parameter */ 'classes', [/* parameter description */
					[/* text */ 't', `an array of Java types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O exception occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the content object of this URL that is the first match of
               the types specified in the classes array.
               null if none of the requested types are supported.`]
			]
		]],
		[/* method */ 'getProtocol()', [
			[/* method description */
				[/* text */ 't', `Gets the protocol name of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the protocol of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getAuthority()', [
			[/* method description */
				[/* text */ 't', `Gets the authority part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the authority part of this `],
				[/* inline code block */ 'i', `URL`]
			]
		]],
		[/* method */ 'getFile()', [
			[/* method description */
				[/* text */ 't', `Gets the file name of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.
 The returned file portion will be
 the same as `],
				[/* inline code block */ 'i', `getPath()`],
				[/* text */ 't', `, plus the concatenation of
 the value of `],
				[/* inline code block */ 'i', `getQuery()`],
				[/* text */ 't', `, if any. If there is
 no query portion, this method and `],
				[/* inline code block */ 'i', `getPath()`],
				[/* text */ 't', ` will
 return identical results.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the file name of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `,
 or an empty string if one does not exist`]
			]
		]],
		[/* method */ 'getRef()', [
			[/* method description */
				[/* text */ 't', `Gets the anchor (also known as the "reference") of this
 `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the anchor (also known as the "reference") of this
          `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if one does not exist`]
			]
		]],
		[/* method */ 'getQuery()', [
			[/* method description */
				[/* text */ 't', `Gets the query part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the query part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `,
 or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if one does not exist`]
			]
		]],
		[/* method */ 'getPath()', [
			[/* method description */
				[/* text */ 't', `Gets the path part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the path part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `, or an
 empty string if one does not exist`]
			]
		]],
		[/* method */ 'getUserInfo()', [
			[/* method description */
				[/* text */ 't', `Gets the userInfo part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the userInfo part of this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if one does not exist`]
			]
		]],
		[/* method */ 'toURI()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.net.URI`],
				[/* text */ 't', ` equivalent to this URL.
 This method functions in the same way as `],
				[/* inline code block */ 'i', `new URI (this.toString())`],
				[/* text */ 't', `.
 `],
				[/* block */ 'b', `Note, any URL instance that complies with RFC 2396 can be converted
 to a URI. However, some URLs that are not strictly in compliance
 can not be converted to a URI.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.net.URISyntaxException', [/* throw description */
					[/* text */ 't', `if this URL is not formatted strictly according to
            RFC2396 and cannot be converted to a URI.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a URI instance equivalent to this URL.`]
			]
		]],
		[/* method */ 'setURLStreamHandlerFactory(java.net.URLStreamHandlerFactory)', [
			[/* method description */
				[/* text */ 't', `Sets an application's `],
				[/* inline code block */ 'i', `URLStreamHandlerFactory`],
				[/* text */ 't', `.
 This method can be called at most once in a given Java Virtual
 Machine.

`],
				[/* block */ 'b', [
					[/* text */ 't', ` The `],
					[/* inline code block */ 'i', `URLStreamHandlerFactory`],
					[/* text */ 't', ` instance is used to
construct a stream protocol handler from a protocol name.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, this method first calls
 the security manager's `],
					[/* inline code block */ 'i', `checkSetFactory`],
					[/* text */ 't', ` method
 to ensure the operation is allowed.
 This could result in a SecurityException.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'fac', [/* parameter description */
					[/* text */ 't', `the desired factory.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.Error', [/* throw description */
					[/* text */ 't', `if the application has already set a factory.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkSetFactory`],
					[/* text */ 't', ` method doesn't allow
             the operation.`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
