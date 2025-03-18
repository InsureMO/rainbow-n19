import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.URLConnection', [
	[/* class description */
		[/* text */ 't', `The abstract class `],
		[/* inline code block */ 'i', `URLConnection`],
		[/* text */ 't', ` is the superclass
 of all classes that represent a communications link between the
 application and a URL. Instances of this class can be used both to
 read from and to write to the resource referenced by the URL.

 `],
		[/* block */ 'b', `
 In general, creating a connection to a URL is a multistep process:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* text */ 't', `The connection object is created by invoking the
     `],
				[/* reference */ 'r', `java.net.URL#openConnection()`, `openConnection`],
				[/* text */ 't', ` method on a URL.
 `]
			]],
			[/* block */ 'b', `The setup parameters and general request properties are manipulated.
 `],
			[/* block */ 'b', [
				[/* text */ 't', `The actual connection to the remote object is made, using the
    `],
				[/* reference */ 'r', `#connect()`, `connect`],
				[/* text */ 't', ` method.
 `]
			]],
			[/* block */ 'b', `The remote object becomes available. The header fields and the contents
     of the remote object can be accessed.
 `]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 The setup parameters are modified using the following methods:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setAllowUserInteraction`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setDoInput`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setDoOutput`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setIfModifiedSince`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setUseCaches`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 and the general request properties are modified using the method:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `setRequestProperty`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 Default values for the `],
			[/* inline code block */ 'i', `AllowUserInteraction`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `UseCaches`],
			[/* text */ 't', ` parameters can be set using the methods
 `],
			[/* inline code block */ 'i', `setDefaultAllowUserInteraction`],
			[/* text */ 't', ` and
 `],
			[/* inline code block */ 'i', `setDefaultUseCaches`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 Each of the above `],
			[/* inline code block */ 'i', `set`],
			[/* text */ 't', ` methods has a corresponding
 `],
			[/* inline code block */ 'i', `get`],
			[/* text */ 't', ` method to retrieve the value of the parameter or
 general request property. The specific parameters and general
 request properties that are applicable are protocol specific.
 `]
		]],
		[/* block */ 'b', `
 The following methods are used to access the header fields and
 the contents after the connection is made to the remote object:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getContent`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getHeaderField`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getInputStream`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getOutputStream`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `
 Certain header fields are accessed frequently. The methods:
 `],
		[/* list */ 'l', [
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getContentEncoding`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getContentLength`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getContentType`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getDate`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getExpiration`],
				[/* text */ 't', `
   `]
			]],
			[/* block */ 'b', [
				[/* inline code block */ 'i', `getLastModified`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `
 provide convenient access to these fields. The
 `],
			[/* inline code block */ 'i', `getContentType`],
			[/* text */ 't', ` method is used by the
 `],
			[/* inline code block */ 'i', `getContent`],
			[/* text */ 't', ` method to determine the type of the remote
 object; subclasses may find it convenient to override the
 `],
			[/* inline code block */ 'i', `getContentType`],
			[/* text */ 't', ` method.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 In the common case, all of the pre-connection parameters and
 general request properties can be ignored: the pre-connection
 parameters and request properties default to sensible values. For
 most clients of this interface, there are only two interesting
 methods: `],
			[/* inline code block */ 'i', `getInputStream`],
			[/* text */ 't', ` and `],
			[/* inline code block */ 'i', `getContent`],
			[/* text */ 't', `,
 which are mirrored in the `],
			[/* inline code block */ 'i', `URL`],
			[/* text */ 't', ` class by convenience methods.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 More information on the request properties and header fields of
 an `],
			[/* inline code block */ 'i', `http`],
			[/* text */ 't', ` connection can be found at:
 `]
		]],
		[/* blockquote */ 'q', [
			[/* code block */ 'c', [
				[/* text */ 't', ` `],
				[/* text */ 't', `http://www.ietf.org/rfc/rfc2616.txt`],
				[/* text */ 't', `
 `]
			]]
		]],
		[/* text */ 't', `

 Invoking the `],
		[/* inline code block */ 'i', `close()`],
		[/* text */ 't', ` methods on the `],
		[/* inline code block */ 'i', `InputStream`],
		[/* text */ 't', ` or `],
		[/* inline code block */ 'i', `OutputStream`],
		[/* text */ 't', ` of an
 `],
		[/* inline code block */ 'i', `URLConnection`],
		[/* text */ 't', ` after a request may free network resources associated with this
 instance, unless particular protocol specifications specify different behaviours
 for it.`],
		[/* block */ 'b', '']
	],
	[/* fields */
		[/* field */ 'allowUserInteraction', [
			[/* field description */
				[/* text */ 't', `If `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, this `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', ` is being examined in
 a context in which it makes sense to allow user interactions such
 as popping up an authentication dialog. If `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `,
 then no user interaction is allowed.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value of this field can be set by the
 `],
					[/* inline code block */ 'i', `setAllowUserInteraction`],
					[/* text */ 't', ` method.
 Its value is returned by the
 `],
					[/* inline code block */ 'i', `getAllowUserInteraction`],
					[/* text */ 't', ` method.
 Its default value is the value of the argument in the last invocation
 of the `],
					[/* inline code block */ 'i', `setDefaultAllowUserInteraction`],
					[/* text */ 't', ` method.`]
				]]
			],
		]],
		[/* field */ 'connected', [
			[/* field description */
				[/* text */ 't', `If `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, this connection object has not created a
 communications link to the specified URL. If `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `,
 the communications link has been established.`]
			],
		]],
		[/* field */ 'doInput', [
			[/* field description */
				[/* text */ 't', `This variable is set by the `],
				[/* inline code block */ 'i', `setDoInput`],
				[/* text */ 't', ` method. Its
 value is returned by the `],
				[/* inline code block */ 'i', `getDoInput`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A URL connection can be used for input and/or output. Setting the
 `],
					[/* inline code block */ 'i', `doInput`],
					[/* text */ 't', ` flag to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates that
 the application intends to read data from the URL connection.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default value of this field is `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'doOutput', [
			[/* field description */
				[/* text */ 't', `This variable is set by the `],
				[/* inline code block */ 'i', `setDoOutput`],
				[/* text */ 't', ` method. Its
 value is returned by the `],
				[/* inline code block */ 'i', `getDoOutput`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 A URL connection can be used for input and/or output. Setting the
 `],
					[/* inline code block */ 'i', `doOutput`],
					[/* text */ 't', ` flag to `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', ` indicates
 that the application intends to write data to the URL connection.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default value of this field is `],
					[/* inline code block */ 'i', `false`],
					[/* text */ 't', `.`]
				]]
			],
		]],
		[/* field */ 'ifModifiedSince', [
			[/* field description */
				[/* text */ 't', `Some protocols support skipping the fetching of the object unless
 the object has been modified more recently than a certain time.
 `],
				[/* block */ 'b', `
 A nonzero value gives a time as the number of milliseconds since
 January 1, 1970, GMT. The object is fetched only if it has been
 modified more recently than that time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This variable is set by the `],
					[/* inline code block */ 'i', `setIfModifiedSince`],
					[/* text */ 't', `
 method. Its value is returned by the
 `],
					[/* inline code block */ 'i', `getIfModifiedSince`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default value of this field is `],
					[/* inline code block */ 'i', `0`],
					[/* text */ 't', `, indicating
 that the fetching must always occur.`]
				]]
			],
		]],
		[/* field */ 'url', [
			[/* field description */
				[/* text */ 't', `The URL represents the remote object on the World Wide Web to
 which this connection is opened.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The value of this field can be accessed by the
 `],
					[/* inline code block */ 'i', `getURL`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default value of this variable is the value of the URL
 argument in the `],
					[/* inline code block */ 'i', `URLConnection`],
					[/* text */ 't', ` constructor.`]
				]]
			],
		]],
		[/* field */ 'useCaches', [
			[/* field description */
				[/* text */ 't', `If `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `, the protocol is allowed to use caching
 whenever it can. If `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', `, the protocol must always
 try to get a fresh copy of the object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This field is set by the `],
					[/* inline code block */ 'i', `setUseCaches`],
					[/* text */ 't', ` method. Its
 value is returned by the `],
					[/* inline code block */ 'i', `getUseCaches`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 Its default value is the value given in the last invocation of the
 `],
					[/* inline code block */ 'i', `setDefaultUseCaches`],
					[/* text */ 't', ` method.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 The default setting may be overridden per protocol with
 `],
					[/* reference */ 'r', `#setDefaultUseCaches(java.lang.String,boolean)`, `setDefaultUseCaches(String,boolean)`],
					[/* text */ 't', `.`]
				]]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.net.URL)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a URL connection to the specified URL. A connection to
 the object referenced by the URL is not created.`]
			],
			[/* parameters */
				[/* parameter */ 'url', [/* parameter description */
					[/* text */ 't', `the specified URL.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'connect()', [
			[/* method description */
				[/* text */ 't', `Opens a communications link to the resource referenced by this
 URL, if such a connection has not already been established.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the `],
					[/* inline code block */ 'i', `connect`],
					[/* text */ 't', ` method is called when the connection
 has already been opened (indicated by the `],
					[/* inline code block */ 'i', `connected`],
					[/* text */ 't', `
 field having the value `],
					[/* inline code block */ 'i', `true`],
					[/* text */ 't', `), the call is ignored.
 `]
				]],
				[/* block */ 'b', `
 URLConnection objects go through two phases: first they are
 created, then they are connected.  After being created, and
 before being connected, various options can be specified
 (e.g., doInput and UseCaches).  After connecting, it is an
 error to try to set them.  Operations that depend on being
 connected, like getContentLength, will implicitly perform the
 connection, if necessary.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketTimeoutException', [/* throw description */
					[/* text */ 't', `if the timeout expires before
               the connection can be established`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while opening the
               connection.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'getAllowUserInteraction()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', ` field for
 this object.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', ` field for
          this object.`]
			]
		]],
		[/* method */ 'getDefaultUseCaches()', [
			[/* method description */
				[/* text */ 't', `Returns the default value of a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
 `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` flag.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This default is "sticky", being a part of the static state of all
 URLConnections.  This flag applies to the next, and all following
 URLConnections that are created. This default value can be over-ridden
 per protocol using `],
					[/* reference */ 'r', `#setDefaultUseCaches(java.lang.String,boolean)`, `setDefaultUseCaches(String,boolean)`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the default value of a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
          `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` flag.`]
			]
		]],
		[/* method */ 'getDoInput()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
 `],
				[/* inline code block */ 'i', `doInput`],
				[/* text */ 't', ` flag.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
          `],
				[/* inline code block */ 'i', `doInput`],
				[/* text */ 't', ` flag.`]
			]
		]],
		[/* method */ 'getDoOutput()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
 `],
				[/* inline code block */ 'i', `doOutput`],
				[/* text */ 't', ` flag.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
          `],
				[/* inline code block */ 'i', `doOutput`],
				[/* text */ 't', ` flag.`]
			]
		]],
		[/* method */ 'getUseCaches()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
 `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s
          `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` field.`]
			]
		]],
		[/* method */ 'getConnectTimeout()', [
			[/* method description */
				[/* text */ 't', `Returns setting for connect timeout.
 `],
				[/* block */ 'b', `
 0 return implies that the option is disabled
 (i.e., timeout of infinity).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` that indicates the connect timeout
         value in milliseconds`]
			]
		]],
		[/* method */ 'getContentLength()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `content-length`],
				[/* text */ 't', ` header field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 `],
					[/* text */ 't', `Note`],
					[/* text */ 't', `: `],
					[/* reference */ 'r', `#getContentLengthLong()`, `getContentLengthLong()`],
					[/* text */ 't', `
 should be preferred over this method, since it returns a `],
					[/* inline code block */ 'i', `long`],
					[/* text */ 't', `
 instead and is therefore more portable.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the content length of the resource that this connection's URL
          references, `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the content length is not known,
          or if the content length is greater than Integer.MAX_VALUE.`]
			]
		]],
		[/* method */ 'getHeaderFieldInt(java.lang.String,int)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named field parsed as a number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This form of `],
					[/* inline code block */ 'i', `getHeaderField`],
					[/* text */ 't', ` exists because some
 connection types (e.g., `],
					[/* inline code block */ 'i', `http-ng`],
					[/* text */ 't', `) have pre-parsed
 headers. Classes for that connection type can override this method
 and short-circuit the parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the header field.`]
				]],
				[/* parameter */ 'Default', [/* parameter description */
					[/* text */ 't', `the default value.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the named field, parsed as an integer. The
          `],
				[/* inline code block */ 'i', `Default`],
				[/* text */ 't', ` value is returned if the field is
          missing or malformed.`]
			]
		]],
		[/* method */ 'getReadTimeout()', [
			[/* method description */
				[/* text */ 't', `Returns setting for read timeout. 0 return implies that the
 option is disabled (i.e., timeout of infinity).`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `int`],
				[/* text */ 't', ` that indicates the read timeout
         value in milliseconds`]
			]
		]],
		[/* method */ 'getInputStream()', [
			[/* method description */
				[/* text */ 't', `Returns an input stream that reads from this open connection.

 A SocketTimeoutException can be thrown when reading from the
 returned input stream if the read timeout expires before data
 is available for read.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while
               creating the input stream.`]
				]],
				[/* throw */ 'java.net.UnknownServiceException', [/* throw description */
					[/* text */ 't', `if the protocol does not support
               input.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an input stream that reads from this open connection.`]
			]
		]],
		[/* method */ 'getOutputStream()', [
			[/* method description */
				[/* text */ 't', `Returns an output stream that writes to this connection.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while
               creating the output stream.`]
				]],
				[/* throw */ 'java.net.UnknownServiceException', [/* throw description */
					[/* text */ 't', `if the protocol does not support
               output.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an output stream that writes to this connection.`]
			]
		]],
		[/* method */ 'getContent()', [
			[/* method description */
				[/* text */ 't', `Retrieves the contents of this URL connection.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method first determines the content type of the object by
 calling the `],
					[/* inline code block */ 'i', `getContentType`],
					[/* text */ 't', ` method. If this is
 the first time that the application has seen that specific content
 type, a content handler for that content type is created.
 `]
				]],
				[/* block */ 'b', ` This is done as follows:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `If the application has set up a content handler factory instance
     using the `],
						[/* inline code block */ 'i', `setContentHandlerFactory`],
						[/* text */ 't', ` method, the
     `],
						[/* inline code block */ 'i', `createContentHandler`],
						[/* text */ 't', ` method of that instance is called
     with the content type as an argument; the result is a content
     handler for that content type.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `If no `],
						[/* inline code block */ 'i', `ContentHandlerFactory`],
						[/* text */ 't', ` has yet been set up,
     or if the factory's `],
						[/* inline code block */ 'i', `createContentHandler`],
						[/* text */ 't', ` method
     returns `],
						[/* inline code block */ 'i', `null`],
						[/* text */ 't', `, then the `],
						[/* reference */ 'r', `java.util.ServiceLoader`, `ServiceLoader`],
						[/* text */ 't', ` mechanism is used to locate `],
						[/* reference */ 'r', `java.net.ContentHandlerFactory`, `ContentHandlerFactory`],
						[/* text */ 't', `
     implementations using the system class
     loader. The order that factories are located is implementation
     specific, and an implementation is free to cache the located
     factories. A `],
						[/* reference */ 'r', `java.util.ServiceConfigurationError`, `ServiceConfigurationError`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `Error`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `RuntimeException`],
						[/* text */ 't', `
     thrown from the `],
						[/* inline code block */ 'i', `createContentHandler`],
						[/* text */ 't', `, if encountered, will
     be propagated to the calling thread. The `],
						[/* inline code block */ 'i', `createContentHandler`],
						[/* text */ 't', ` method of each factory, if instantiated, is
     invoked, with the content type, until a factory returns non-null,
     or all factories have been exhausted.
 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Failing that, this method tries to load a content handler
     class as defined by `],
						[/* reference */ 'r', `java.net.ContentHandler`, `ContentHandler`],
						[/* text */ 't', `.
     If the class does not exist, or is not a subclass of `],
						[/* inline code block */ 'i', `ContentHandler`],
						[/* text */ 't', `, then an `],
						[/* inline code block */ 'i', `UnknownServiceException`],
						[/* text */ 't', ` is thrown.
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while
               getting the content.`]
				]],
				[/* throw */ 'java.net.UnknownServiceException', [/* throw description */
					[/* text */ 't', `if the protocol does not support
               the content type.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object fetched. The `],
				[/* inline code block */ 'i', `instanceof`],
				[/* text */ 't', ` operator
               should be used to determine the specific kind of object
               returned.`]
			]
		]],
		[/* method */ 'getContent(java.lang.Class[])', [
			[/* method description */
				[/* text */ 't', `Retrieves the contents of this URL connection.`]
			],
			[/* parameters */
				[/* parameter */ 'classes', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` array
 indicating the requested types`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while
               getting the content.`]
				]],
				[/* throw */ 'java.net.UnknownServiceException', [/* throw description */
					[/* text */ 't', `if the protocol does not support
               the content type.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object fetched that is the first match of the type
               specified in the classes array. null if none of
               the requested types are supported.
               The `],
				[/* inline code block */ 'i', `instanceof`],
				[/* text */ 't', ` operator should be used to
               determine the specific kind of object returned.`]
			]
		]],
		[/* method */ 'getContentEncoding()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `content-encoding`],
				[/* text */ 't', ` header field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the content encoding of the resource that the URL references,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not known.`]
			]
		]],
		[/* method */ 'getContentType()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `content-type`],
				[/* text */ 't', ` header field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the content type of the resource that the URL references,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if not known.`]
			]
		]],
		[/* method */ 'getHeaderField(int)', [
			[/* method description */
				[/* text */ 't', `Returns the value for the `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `th`, 'sup'],
				[/* text */ 't', ` header field.
 It returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there are fewer than
 `],
				[/* inline code block */ 'i', `n+1`],
				[/* text */ 't', ` fields.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This method can be used in conjunction with the
 `],
					[/* reference */ 'r', `#getHeaderFieldKey(int)`, `getHeaderFieldKey`],
					[/* text */ 't', ` method to iterate through all
 the headers in the message.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `an index, where `],
					[/* inline code block */ 'i', `n>=0`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `th`, 'sup'],
				[/* text */ 't', ` header field
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there are fewer than `],
				[/* inline code block */ 'i', `n+1`],
				[/* text */ 't', ` fields`]
			]
		]],
		[/* method */ 'getHeaderField(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named header field.
 `],
				[/* block */ 'b', `
 If called on a connection that sets the same header multiple times
 with possibly different values, only the last value is returned.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of a header field.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the named header field, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
          if there is no such field in the header.`]
			]
		]],
		[/* method */ 'getHeaderFieldKey(int)', [
			[/* method description */
				[/* text */ 't', `Returns the key for the `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `th`, 'sup'],
				[/* text */ 't', ` header field.
 Some implementations may treat the `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', `th`, 'sup'],
				[/* text */ 't', `
 header field as special, in which case, `],
				[/* reference */ 'r', `#getHeaderField(int)`, `getHeaderField(0)`],
				[/* text */ 't', `
 may return some value, but `],
				[/* inline code block */ 'i', `getHeaderFieldKey(0)`],
				[/* text */ 't', ` returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 For `],
				[/* inline code block */ 'i', `n > 0`],
				[/* text */ 't', ` it returns `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there are fewer than `],
				[/* inline code block */ 'i', `n+1`],
				[/* text */ 't', ` fields.`]
			],
			[/* parameters */
				[/* parameter */ 'n', [/* parameter description */
					[/* text */ 't', `an index, where `],
					[/* inline code block */ 'i', `n>=0`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the key for the `],
				[/* inline code block */ 'i', `n`],
				[/* text */ 't', `th`, 'sup'],
				[/* text */ 't', ` header field,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there are fewer than `],
				[/* inline code block */ 'i', `n+1`],
				[/* text */ 't', `
          fields when `],
				[/* inline code block */ 'i', `n > 0`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getRequestProperty(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named general request property for this
 connection.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the keyword by which the request is known (e.g., "Accept").`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the named general request property for this
           connection. If key is null, then null is returned.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representation of this URL connection.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a string representation of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `.`]
			]
		]],
		[/* method */ 'getURL()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `
 field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `'s `],
				[/* inline code block */ 'i', `URL`],
				[/* text */ 't', `
          field.`]
			]
		]],
		[/* method */ 'getPermission()', [
			[/* method description */
				[/* text */ 't', `Returns a permission object representing the permission
 necessary to make the connection represented by this
 object. This method returns null if no permission is
 required to make the connection. By default, this method
 returns `],
				[/* inline code block */ 'i', `java.security.AllPermission`],
				[/* text */ 't', `. Subclasses
 should override this method and return the permission
 that best represents the permission required to make
 a connection to the URL. For example, a `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `
 representing a `],
				[/* inline code block */ 'i', `file:`],
				[/* text */ 't', ` URL would return a
 `],
				[/* inline code block */ 'i', `java.io.FilePermission`],
				[/* text */ 't', ` object.

 `],
				[/* block */ 'b', `The permission returned may dependent upon the state of the
 connection. For example, the permission before connecting may be
 different from that after connecting. For example, an HTTP
 sever, say foo.com, may redirect the connection to a different
 host, say bar.com. Before connecting the permission returned by
 the connection will represent the permission needed to connect
 to foo.com, while the permission returned after connecting will
 be to bar.com.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Permissions are generally used for two purposes: to protect
 caches of objects obtained through URLConnections, and to check
 the right of a recipient to learn about a particular URL. In
 the first case, the permission should be obtained
 `],
					[/* text */ 't', `after`],
					[/* text */ 't', ` the object has been obtained. For example, in an
 HTTP connection, this will represent the permission to connect
 to the host from which the data was ultimately fetched. In the
 second case, the permission should be obtained and tested
 `],
					[/* text */ 't', `before`],
					[/* text */ 't', ` connecting.`]
				]]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if the computation of the permission
 requires network or file I/O and an exception occurs while
 computing it.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the permission object representing the permission
 necessary to make the connection represented by this
 URLConnection.`]
			]
		]],
		[/* method */ 'getHeaderFields()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable Map of the header fields.
 The Map keys are Strings that represent the
 response-header field names. Each Map value is an
 unmodifiable List of Strings that represents
 the corresponding field values.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a Map of header fields`]
			]
		]],
		[/* method */ 'getRequestProperties()', [
			[/* method description */
				[/* text */ 't', `Returns an unmodifiable Map of general request
 properties for this connection. The Map keys
 are Strings that represent the request-header
 field names. Each Map value is a unmodifiable List
 of Strings that represents the corresponding
 field values.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Map of the general request properties for this connection.`]
			]
		]],
		[/* method */ 'getContentLengthLong()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `content-length`],
				[/* text */ 't', ` header field as a
 long.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the content length of the resource that this connection's URL
          references, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the content length is
          not known.`]
			]
		]],
		[/* method */ 'getDate()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `date`],
				[/* text */ 't', ` header field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the sending date of the resource that the URL references,
          or `],
				[/* inline code block */ 'i', `0`],
				[/* text */ 't', ` if not known. The value returned is the
          number of milliseconds since January 1, 1970 GMT.`]
			]
		]],
		[/* method */ 'getExpiration()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `expires`],
				[/* text */ 't', ` header field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the expiration date of the resource that this URL references,
          or 0 if not known. The value is the number of milliseconds since
          January 1, 1970 GMT.`]
			]
		]],
		[/* method */ 'getHeaderFieldDate(java.lang.String,long)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named field parsed as date.
 The result is the number of milliseconds since January 1, 1970 GMT
 represented by the named field.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This form of `],
					[/* inline code block */ 'i', `getHeaderField`],
					[/* text */ 't', ` exists because some
 connection types (e.g., `],
					[/* inline code block */ 'i', `http-ng`],
					[/* text */ 't', `) have pre-parsed
 headers. Classes for that connection type can override this method
 and short-circuit the parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the header field.`]
				]],
				[/* parameter */ 'Default', [/* parameter description */
					[/* text */ 't', `a default value.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the field, parsed as a date. The value of the
          `],
				[/* inline code block */ 'i', `Default`],
				[/* text */ 't', ` argument is returned if the field is
          missing or malformed.`]
			]
		]],
		[/* method */ 'getHeaderFieldLong(java.lang.String,long)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the named field parsed as a number.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 This form of `],
					[/* inline code block */ 'i', `getHeaderField`],
					[/* text */ 't', ` exists because some
 connection types (e.g., `],
					[/* inline code block */ 'i', `http-ng`],
					[/* text */ 't', `) have pre-parsed
 headers. Classes for that connection type can override this method
 and short-circuit the parsing.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the header field.`]
				]],
				[/* parameter */ 'Default', [/* parameter description */
					[/* text */ 't', `the default value.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the named field, parsed as a long. The
          `],
				[/* inline code block */ 'i', `Default`],
				[/* text */ 't', ` value is returned if the field is
          missing or malformed.`]
			]
		]],
		[/* method */ 'getIfModifiedSince()', [
			[/* method description */
				[/* text */ 't', `Returns the value of this object's `],
				[/* inline code block */ 'i', `ifModifiedSince`],
				[/* text */ 't', ` field.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of this object's `],
				[/* inline code block */ 'i', `ifModifiedSince`],
				[/* text */ 't', ` field.`]
			]
		]],
		[/* method */ 'getLastModified()', [
			[/* method description */
				[/* text */ 't', `Returns the value of the `],
				[/* inline code block */ 'i', `last-modified`],
				[/* text */ 't', ` header field.
 The result is the number of milliseconds since January 1, 1970 GMT.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the date the resource referenced by this
          `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` was last modified, or 0 if not known.`]
			]
		]],
		[/* method */ 'getDefaultAllowUserInteraction()', [
			[/* method description */
				[/* text */ 't', `Returns the default value of the `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', `
 field.
 `],
				[/* block */ 'b', `
 This default is "sticky", being a part of the static state of all
 URLConnections.  This flag applies to the next, and all following
 URLConnections that are created.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the default value of the `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', `
          field.`]
			]
		]],
		[/* method */ 'getDefaultUseCaches(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the default value of the `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` flag for the given protocol. If
 `],
				[/* reference */ 'r', `#setDefaultUseCaches(java.lang.String,boolean)`, `setDefaultUseCaches(String,boolean)`],
				[/* text */ 't', ` was called for the given protocol,
 then that value is returned. Otherwise, if `],
				[/* reference */ 'r', `#setDefaultUseCaches(boolean)`, `setDefaultUseCaches(boolean)`],
				[/* text */ 't', `
 was called, then that value is returned. If neither method was called,
 the return value is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', `. The protocol name is case insensitive.`]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the protocol whose defaultUseCaches setting is required`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the default value of the `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` flag for the given protocol.`]
			]
		]],
		[/* method */ 'getDefaultRequestProperty(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the value of the default request property. Default request
 properties are set for every connection.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the keyword by which the request is known (e.g., "Accept").`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the value of the default request property
 for the specified key.`]
			]
		]],
		[/* method */ 'guessContentTypeFromName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Tries to determine the content type of an object, based
 on the specified "file" component of a URL.
 This is a convenience method that can be used by
 subclasses that override the `],
				[/* inline code block */ 'i', `getContentType`],
				[/* text */ 't', ` method.`]
			],
			[/* parameters */
				[/* parameter */ 'fname', [/* parameter description */
					[/* text */ 't', `a filename.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `a guess as to what the content type of the object is,
          based upon its file name.`]
			]
		]],
		[/* method */ 'guessContentTypeFromStream(java.io.InputStream)', [
			[/* method description */
				[/* text */ 't', `Tries to determine the type of an input stream based on the
 characters at the beginning of the input stream. This method can
 be used by subclasses that override the
 `],
				[/* inline code block */ 'i', `getContentType`],
				[/* text */ 't', ` method.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Ideally, this routine would not be needed. But many
 `],
					[/* inline code block */ 'i', `http`],
					[/* text */ 't', ` servers return the incorrect content type; in
 addition, there are many nonstandard extensions. Direct inspection
 of the bytes to determine the content type is often more accurate
 than believing the content type claimed by the `],
					[/* inline code block */ 'i', `http`],
					[/* text */ 't', ` server.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'is', [/* parameter description */
					[/* text */ 't', `an input stream that supports marks.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while reading the
               input stream.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a guess at the content type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if none
             can be determined.`]
			]
		]],
		[/* method */ 'getFileNameMap()', [
			[/* method description */
				[/* text */ 't', `Loads filename map (a mimetable) from a data file. It will
 first try to load the user-specific table, defined
 by "content.types.user.table" property. If that fails,
 it tries to load the default built-in table.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the FileNameMap`]
			]
		]],
		[/* method */ 'setContentHandlerFactory(java.net.ContentHandlerFactory)', [
			[/* method description */
				[/* text */ 't', `Sets the `],
				[/* inline code block */ 'i', `ContentHandlerFactory`],
				[/* text */ 't', ` of an
 application. It can be called at most once by an application.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `ContentHandlerFactory`],
					[/* text */ 't', ` instance is used to
 construct a content handler from a content type.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, this method first calls
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
					[/* text */ 't', `if the factory has already been defined.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkSetFactory`],
					[/* text */ 't', ` method doesn't allow the operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDefaultAllowUserInteraction(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the default value of the
 `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', ` field for all future
 `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` objects to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'defaultallowuserinteraction', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setDefaultRequestProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the default value of a general request property. When a
 `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` is created, it is initialized with
 these properties.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the keyword by which the request is known
                  (e.g., "`],
					[/* inline code block */ 'i', `Accept`],
					[/* text */ 't', `").`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value associated with the key.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setDefaultUseCaches(java.lang.String,boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the default value of the `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` field for the named
 protocol to the given value. This value overrides any default setting
 set by `],
				[/* reference */ 'r', `#setDefaultUseCaches(boolean)`, `setDefaultUseCaches(boolean)`],
				[/* text */ 't', ` for the given protocol.
 Successive calls to this method change the setting and affect the
 default value for all future connections of that protocol. The protocol
 name is case insensitive.`]
			],
			[/* parameters */
				[/* parameter */ 'protocol', [/* parameter description */
					[/* text */ 't', `the protocol to set the default for`]
				]],
				[/* parameter */ 'defaultVal', [/* parameter description */
					[/* text */ 't', `whether caching is enabled by default for the given protocol`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setFileNameMap(java.net.FileNameMap)', [
			[/* method description */
				[/* text */ 't', `Sets the FileNameMap.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, this method first calls
 the security manager's `],
					[/* inline code block */ 'i', `checkSetFactory`],
					[/* text */ 't', ` method
 to ensure the operation is allowed.
 This could result in a SecurityException.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'map', [/* parameter description */
					[/* text */ 't', `the FileNameMap to be set`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
             `],
					[/* inline code block */ 'i', `checkSetFactory`],
					[/* text */ 't', ` method doesn't allow the operation.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'addRequestProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Adds a general request property specified by a
 key-value pair.  This method will not overwrite
 existing values associated with the same key.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the keyword by which the request is known
                  (e.g., "`],
					[/* inline code block */ 'i', `Accept`],
					[/* text */ 't', `").`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value associated with it.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if key is null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setAllowUserInteraction(boolean)', [
			[/* method description */
				[/* text */ 't', `Set the value of the `],
				[/* inline code block */ 'i', `allowUserInteraction`],
				[/* text */ 't', ` field of
 this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'allowuserinteraction', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setConnectTimeout(int)', [
			[/* method description */
				[/* text */ 't', `Sets a specified timeout value, in milliseconds, to be used
 when opening a communications link to the resource referenced
 by this URLConnection.  If the timeout expires before the
 connection can be established, a
 java.net.SocketTimeoutException is raised. A timeout of zero is
 interpreted as an infinite timeout.

 `],
				[/* block */ 'b', ` Some non-standard implementation of this method may ignore
 the specified timeout. To see the connect timeout set, please
 call getConnectTimeout().`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` that specifies the connect
               timeout value in milliseconds`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the timeout parameter is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDefaultUseCaches(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the default value of the `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` field to the
 specified value. This default value can be over-ridden
 per protocol using `],
				[/* reference */ 'r', `#setDefaultUseCaches(java.lang.String,boolean)`, `setDefaultUseCaches(String,boolean)`]
			],
			[/* parameters */
				[/* parameter */ 'defaultusecaches', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			/* throws */,
			/* return */ UDF
		]],
		[/* method */ 'setDoInput(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the `],
				[/* inline code block */ 'i', `doInput`],
				[/* text */ 't', ` field for this
 `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` to the specified value.
 `],
				[/* block */ 'b', `
 A URL connection can be used for input and/or output.  Set the doInput
 flag to true if you intend to use the URL connection for input,
 false if not.  The default is true.`]
			],
			[/* parameters */
				[/* parameter */ 'doinput', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setDoOutput(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the `],
				[/* inline code block */ 'i', `doOutput`],
				[/* text */ 't', ` field for this
 `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` to the specified value.
 `],
				[/* block */ 'b', `
 A URL connection can be used for input and/or output.  Set the doOutput
 flag to true if you intend to use the URL connection for output,
 false if not.  The default is false.`]
			],
			[/* parameters */
				[/* parameter */ 'dooutput', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setIfModifiedSince(long)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the `],
				[/* inline code block */ 'i', `ifModifiedSince`],
				[/* text */ 't', ` field of
 this `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` to the specified value.`]
			],
			[/* parameters */
				[/* parameter */ 'ifmodifiedsince', [/* parameter description */
					[/* text */ 't', `the new value.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setReadTimeout(int)', [
			[/* method description */
				[/* text */ 't', `Sets the read timeout to a specified timeout, in
 milliseconds. A non-zero value specifies the timeout when
 reading from Input stream when a connection is established to a
 resource. If the timeout expires before there is data available
 for read, a java.net.SocketTimeoutException is raised. A
 timeout of zero is interpreted as an infinite timeout.

 `],
				[/* block */ 'b', ` Some non-standard implementation of this method ignores the
 specified timeout. To see the read timeout set, please call
 getReadTimeout().`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `an `],
					[/* inline code block */ 'i', `int`],
					[/* text */ 't', ` that specifies the timeout
 value to be used in milliseconds`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the timeout parameter is negative`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setRequestProperty(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Sets the general request property. If a property with the key already
 exists, overwrite its value with the new value.

 `],
				[/* block */ 'b', ` NOTE: HTTP requires all request properties which can
 legally have multiple instances with the same key
 to use a comma-separated list syntax which enables multiple
 properties to be appended into a single property.`]
			],
			[/* parameters */
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the keyword by which the request is known
                  (e.g., "`],
					[/* inline code block */ 'i', `Accept`],
					[/* text */ 't', `").`]
				]],
				[/* parameter */ 'value', [/* parameter description */
					[/* text */ 't', `the value associated with it.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if key is `],
					[/* inline code block */ 'i', `null`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'setUseCaches(boolean)', [
			[/* method description */
				[/* text */ 't', `Sets the value of the `],
				[/* inline code block */ 'i', `useCaches`],
				[/* text */ 't', ` field of this
 `],
				[/* inline code block */ 'i', `URLConnection`],
				[/* text */ 't', ` to the specified value.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Some protocols do caching of documents.  Occasionally, it is important
 to be able to "tunnel through" and ignore the caches (e.g., the
 "reload" button in a browser).  If the UseCaches flag on a connection
 is true, the connection is allowed to use whatever caches it can.
  If false, caches are to be ignored.
  The default value comes from defaultUseCaches, which defaults to
 true. A default value can also be set per-protocol using
 `],
					[/* reference */ 'r', `#setDefaultUseCaches(java.lang.String,boolean)`, `setDefaultUseCaches(String,boolean)`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'usecaches', [/* parameter description */
					[/* text */ 't', `a `],
					[/* inline code block */ 'i', `boolean`],
					[/* text */ 't', ` indicating whether
 or not to allow caching`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if already connected`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
