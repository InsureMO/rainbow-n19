import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.Proxy', [
	[/* class description */
		[/* text */ 't', `This class represents a proxy setting, typically a type (http, socks) and
 a socket address.
 A `],
		[/* inline code block */ 'i', `Proxy`],
		[/* text */ 't', ` is an immutable object.`]
	],
	[/* fields */
		[/* field */ 'NO_PROXY', [
			[/* field description */
				[/* text */ 't', `A proxy setting that represents a `],
				[/* inline code block */ 'i', `DIRECT`],
				[/* text */ 't', ` connection,
 basically telling the protocol handler not to use any proxying.
 Used, for instance, to create sockets bypassing any other global
 proxy settings (like SOCKS):
 `],
				[/* block */ 'b', [
					[/* inline code block */ 'i', `Socket s = new Socket(Proxy.NO_PROXY);`]
				]]
			],
		]]
	],
	[/* constructors */
		[/* constructor */ '<init>(java.net.Proxy.Type,java.net.SocketAddress)', [
			[/* constructor description */
				[/* text */ 't', `Creates an entry representing a PROXY connection.
 Certain combinations are illegal. For instance, for types Http, and
 Socks, a SocketAddress `],
				[/* text */ 't', `must`],
				[/* text */ 't', ` be provided.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Use the `],
					[/* inline code block */ 'i', `Proxy.NO_PROXY`],
					[/* text */ 't', ` constant
 for representing a direct connection.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Type`],
					[/* text */ 't', ` of the proxy`]
				]],
				[/* parameter */ 'sa', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `SocketAddress`],
					[/* text */ 't', ` for that proxy`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `when the type and the address are
 incompatible`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'type()', [
			[/* method description */
				[/* text */ 't', `Returns the proxy type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a Type representing the proxy type`]
			]
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is
 not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and it represents the same proxy as
 this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Two instances of `],
					[/* inline code block */ 'i', `Proxy`],
					[/* text */ 't', ` represent the same
 address if both the SocketAddresses and type are equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare against.`]
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
				[/* text */ 't', `Constructs a string representation of this Proxy.
 This String is constructed by calling toString() on its type
 and concatenating " @ " and the toString() result from its address
 if its type is not `],
				[/* inline code block */ 'i', `DIRECT`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this Proxy.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this Proxy.`]
			]
		]],
		[/* method */ 'address()', [
			[/* method description */
				[/* text */ 't', `Returns the socket address of the proxy, or
 `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if its a direct connection.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `SocketAddress`],
				[/* text */ 't', ` representing the socket end
         point of the proxy`]
			]
		]]
	],
]);
