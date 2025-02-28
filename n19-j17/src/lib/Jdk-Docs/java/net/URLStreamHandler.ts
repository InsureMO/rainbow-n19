import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URLStreamHandler', [
	[/* class description */
		[/* text */ 't', `The abstract class `],
		[/* inline code block */ 'i', `URLStreamHandler`],
		[/* text */ 't', ` is the common
 superclass for all stream protocol handlers. A stream protocol
 handler knows how to make a connection for a particular protocol
 type, such as `],
		[/* inline code block */ 'i', `http`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `https`],
		[/* text */ 't', `.
 `],
		[/* block */ 'b', [
			[/* text */ 't', `
 In most cases, an instance of a `],
			[/* inline code block */ 'i', `URLStreamHandler`],
			[/* text */ 't', `
 subclass is not created directly by an application. Rather, the
 first time a protocol name is encountered when constructing a
 `],
			[/* inline code block */ 'i', `URL`],
			[/* text */ 't', `, the appropriate stream protocol handler is
 automatically loaded.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructor for subclasses to call.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'equals(java.net.URL,java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Provides the default equals calculation. May be overridden by handlers
 for other protocols that have different requirements for equals().
 This method requires that none of its arguments is null. This is
 guaranteed by the fact that it is only called by java.net.URL class.`]
			],
			[/* parameters */
				[/* parameter */ 'u1', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]],
				[/* parameter */ 'u2', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the two urls are
 considered equal, i.e. they refer to the same
 fragment in the same file.`]
			]
		]],
		[/* method */ 'hashCode(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Provides the default hash calculation. May be overridden by handlers for
 other protocols that have different requirements for hashCode
 calculation.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` suitable for hash table indexing`]
			]
		]],
		[/* method */ 'getHostAddress(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Get the IP address of our host. An empty host field or a DNS failure
 will result in a null return.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` representing the host
 IP address.`]
			]
		]],
		[/* method */ 'parseURL(java.net.URL,java.lang.String,int,int)', [
			[/* method description */
				[/* text */ 't', `Parses the string representation of a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` into a
 `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is any inherited context, then it has already been
 copied into the `],
					[/* inline code block */ 'i', `URL`],
					[/* text */ 't', ` argument.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `parseURL`],
					[/* text */ 't', ` method of `],
					[/* inline code block */ 'i', `URLStreamHandler`],
					[/* text */ 't', `
 parses the string representation as if it were an
 `],
					[/* inline code block */ 'i', `http`],
					[/* text */ 't', ` specification. Most URL protocol families have a
 similar parsing. A stream protocol handler for a protocol that has
 a different syntax must override this routine.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `URL`],
					[/* text */ 't', ` to receive the result of parsing
                  the spec.`]
				]],
				[/* parameter */ 'spec', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `String`],
					[/* text */ 't', ` representing the URL that
                  must be parsed.`]
				]],
				[/* parameter */ 'start', [/* parameter description */
					[/* text */ 't', `the character index at which to begin parsing. This is
                  just past the '`],
					[/* inline code block */ 'i', `:`],
					[/* text */ 't', `' (if there is one) that
                  specifies the determination of the protocol name.`]
				]],
				[/* parameter */ 'limit', [/* parameter description */
					[/* text */ 't', `the character position to stop parsing at. This is the
                  end of the string or the position of the
                  "`],
					[/* inline code block */ 'i', `#`],
					[/* text */ 't', `" character, if present. All information
                  after the sharp sign indicates an anchor.`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'getDefaultPort()', [
			[/* method description */
				[/* text */ 't', `Returns the default port for a URL parsed by this handler. This method
 is meant to be overridden by handlers with default port numbers.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the default port for a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` parsed by this handler.`]
			]
		]],
		[/* method */ 'sameFile(java.net.URL,java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Compare two urls to see whether they refer to the same file,
 i.e., having the same protocol, host, port, and path.
 This method requires that none of its arguments is null. This is
 guaranteed by the fact that it is only called indirectly
 by java.net.URL class.`]
			],
			[/* parameters */
				[/* parameter */ 'u1', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]],
				[/* parameter */ 'u2', [/* parameter description */
					[/* text */ 't', `a URL object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if u1 and u2 refer to the same file`]
			]
		]],
		[/* method */ 'toExternalForm(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Converts a `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` of a specific protocol to a
 `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the URL.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` argument.`]
			]
		]],
		[/* method */ 'openConnection(java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Opens a connection to the object referenced by the
 `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` argument.
 This method should be overridden by a subclass.

 `],
				[/* block */ 'b', `If for the handler's protocol (such as HTTP or JAR), there
 exists a public, specialized URLConnection subclass belonging
 to one of the following packages or one of their subpackages:
 java.lang, java.io, java.util, java.net, the connection
 returned will be of that subclass. For example, for HTTP an
 HttpURLConnection will be returned, and for JAR a
 JarURLConnection will be returned.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the URL that this connects to.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening the
               connection.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` object for the `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'openConnection(java.net.URL,java.net.Proxy)', [
			[/* method description */
				[/* text */ 't', `Same as openConnection(URL), except that the connection will be
 made through the specified proxy; Protocol handlers that do not
 support proxying will ignore the proxy parameter and make a
 normal connection.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` Calling this method preempts the system's default
 `],
					[/* reference */ 'r', `java.net.ProxySelector`],
					[/* text */ 't', ` settings.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the URL that this connects to.`]
				]],
				[/* parameter */ 'p', [/* parameter description */
					[/* text */ 't', `the proxy through which the connection will be made.
                 If direct connection is desired, Proxy.NO_PROXY
                 should be specified.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening the
               connection.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if either u or p is null,
               or p has the wrong type.`]
				]],
				[/* throw */ 'java.lang.UnsupportedOperationException', [/* throw description */
					[/* text */ 't', `if the subclass that
               implements the protocol doesn't support this method.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` object for the `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'hostsEqual(java.net.URL,java.net.URL)', [
			[/* method description */
				[/* text */ 't', `Compares the host components of two URLs.`]
			],
			[/* parameters */
				[/* parameter */ 'u1', [/* parameter description */
					[/* text */ 't', `the URL of the first host to compare`]
				]],
				[/* parameter */ 'u2', [/* parameter description */
					[/* text */ 't', `the URL of the second host to compare`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if they
 are equal, `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'setURL(java.net.URL,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the fields of the `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` argument to the indicated values.
 Only classes derived from URLStreamHandler are able
 to use this method to set the values of the URL fields.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the URL to modify.`]
				]],
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the protocol name.`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the remote host value for the URL.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the port on the remote machine.`]
				]],
				[/* parameter */ 'authority', [/* parameter description */
					[/* text */ 't', `the authority part for the URL.`]
				]],
				[/* parameter */ 'userInfo', [/* parameter description */
					[/* text */ 't', `the userInfo part of the URL.`]
				]],
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path component of the URL.`]
				]],
				[/* parameter */ 'query', [/* parameter description */
					[/* text */ 't', `the query part for the URL.`]
				]],
				[/* parameter */ 'ref', [/* parameter description */
					[/* text */ 't', `the reference.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the protocol handler of the URL is
                                  different from this one`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setURL(java.net.URL,java.lang.String,java.lang.String,int,java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the fields of the `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` argument to the indicated values.
 Only classes derived from URLStreamHandler are able
 to use this method to set the values of the URL fields.`]
			],
			[/* parameters */
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the URL to modify.`]
				]],
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the protocol name. This value is ignored since 1.2.`]
				]],
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the remote host value for the URL.`]
				]],
				[/* parameter */ 'port', [/* parameter description */
					[/* text */ 't', `the port on the remote machine.`]
				]],
				[/* parameter */ 'file', [/* parameter description */
					[/* text */ 't', `the file.`]
				]],
				[/* parameter */ 'ref', [/* parameter description */
					[/* text */ 't', `the reference.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if the protocol handler of the URL is
                                  different from this one`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
