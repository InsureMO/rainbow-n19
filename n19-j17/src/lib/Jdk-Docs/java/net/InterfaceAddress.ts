import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.InterfaceAddress', [
	[/* class description */
		[/* text */ 't', `This class represents a Network Interface address. In short it's an
 IP address, a subnet mask and a broadcast address when the address is
 an IPv4 one. An IP address and a network prefix length in the case
 of IPv6 address.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is
 not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and it represents the same interface address as
 this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Two instances of `],
					[/* inline code block */ 'i', `InterfaceAddress`],
					[/* text */ 't', ` represent the same
 address if the InetAddress, the prefix length and the broadcast are
 the same for both.`]
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
				[/* text */ 't', `Converts this Interface address to a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The
 string returned is of the form: InetAddress / prefix length [ broadcast address ].`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this Interface address.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this Interface address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this Interface address.`]
			]
		]],
		[/* method */ 'getAddress()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` for this address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` for this address.`]
			]
		]],
		[/* method */ 'getBroadcast()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` for the broadcast address
 for this InterfaceAddress.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Only IPv4 networks have broadcast address therefore, in the case
 of an IPv6 network, `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` will be returned.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` representing the broadcast
         address or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no broadcast address.`]
			]
		]],
		[/* method */ 'getNetworkPrefixLength()', [
			[/* method description */
				[/* text */ 't', `Returns the network prefix length for this address. This is also known
 as the subnet mask in the context of IPv4 addresses.
 Typical IPv4 values would be 8 (255.0.0.0), 16 (255.255.0.0)
 or 24 (255.255.255.0). `],
				[/* block */ 'b', `
 Typical IPv6 values would be 128 (::1/128) or 10 (fe80::203:baff:fe27:1243/10)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `short`],
				[/* text */ 't', ` representing the prefix length for the
         subnet of that address.`]
			]
		]]
	],
]);
