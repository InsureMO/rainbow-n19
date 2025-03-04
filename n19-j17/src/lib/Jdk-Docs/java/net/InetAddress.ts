import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.InetAddress', [
	[/* class description */
		[/* text */ 't', `This class represents an Internet Protocol (IP) address.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` An IP address is either a 32-bit or 128-bit unsigned number
 used by IP, a lower-level protocol on which protocols like UDP and
 TCP are built. The IP address architecture is defined by `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc790.txt`, `RFC 790: Assigned Numbers`],
			[/* text */ 't', `, `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc1918.txt`, `RFC 1918: Address Allocation for Private Internets`],
			[/* text */ 't', `, `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2365.txt`, `RFC 2365: Administratively Scoped IP Multicast`],
			[/* text */ 't', `, and `],
			[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373: IP Version 6 Addressing Architecture`],
			[/* text */ 't', `. An instance of an
 InetAddress consists of an IP address and possibly its
 corresponding host name (depending on whether it is constructed
 with a host name or whether it has already done reverse host name
 resolution).

 `]
		]],
		[/* block */ 'b', ` Address types `],
		[/* table */ 'tbl',
			[/* caption */ 'tc'],
			[/* table header */ 'th', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Address Type`]
					]],
					[/* table header cell */ 'thc', [
						[/* text */ 't', `Description`]
					]]
				]]
			]],
			[/* table body */ 'tb', [
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `unicast`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An identifier for a single interface. A packet sent to
         a unicast address is delivered to the interface identified by
         that address.

         `],
						[/* block */ 'b', ` The Unspecified Address -- Also called anylocal or wildcard
         address. It must never be assigned to any node. It indicates the
         absence of an address. One example of its use is as the target of
         bind, which allows a server to accept a client connection on any
         interface, in case the server host has multiple interfaces.

         `],
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* text */ 't', `unspecified`],
							[/* text */ 't', ` address must not be used as
         the destination address of an IP packet.

         `]
						]],
						[/* block */ 'b', [
							[/* text */ 't', ` The `],
							[/* text */ 't', `Loopback`],
							[/* text */ 't', ` Addresses -- This is the address
         assigned to the loopback interface. Anything sent to this
         IP address loops around and becomes IP input on the local
         host. This address is often used when testing a
         client.`]
						]]
					]]
				]],
				[/* table row */ 'tr', [
					[/* table header cell */ 'thc', [
						[/* text */ 't', `multicast`]
					]],
					[/* table cell */ 'tbc', [
						[/* text */ 't', `An identifier for a set of interfaces (typically belonging
         to different nodes). A packet sent to a multicast address is
         delivered to all interfaces identified by that address.`]
					]]
				]]
			]],
		],
		[/* block */ 'b', ` IP address scope `],
		[/* block */ 'b', [
			[/* text */ 't', `Link-local`],
			[/* text */ 't', ` addresses are designed to be used for addressing
 on a single link for purposes such as auto-address configuration,
 neighbor discovery, or when no routers are present.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Site-local`],
			[/* text */ 't', ` addresses are designed to be used for addressing
 inside of a site without the need for a global prefix.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Global`],
			[/* text */ 't', ` addresses are unique across the internet.

 `]
		]],
		[/* block */ 'b', ` Textual representation of IP addresses `],
		[/* text */ 't', `

 The textual representation of an IP address is address family specific.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `

 For IPv4 address format, please refer to `],
			[/* reference */ 'r', `.Inet4Address#format`],
			[/* text */ 't', `; For IPv6
 address format, please refer to `],
			[/* reference */ 'r', `.Inet6Address#format`],
			[/* text */ 't', `.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `There is a `],
			[/* reference */ 'r', `.net-properties#Ipv4IPv6`],
			[/* text */ 't', ` affecting how IPv4 and IPv6 addresses are used.`]
		]],
		[/* block */ 'b', ` Host Name Resolution `],
		[/* text */ 't', `

 Host name-to-IP address `],
		[/* text */ 't', `resolution`],
		[/* text */ 't', ` is accomplished through
 the use of a combination of local machine configuration information
 and network naming services such as the Domain Name System (DNS)
 and Network Information Service(NIS). The particular naming
 services(s) being used is by default the local machine configured
 one. For any host name, its corresponding IP address is returned.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Reverse name resolution`],
			[/* text */ 't', ` means that for any IP address,
 the host associated with the IP address is returned.

 `]
		]],
		[/* block */ 'b', ` The InetAddress class provides methods to resolve host names to
 their IP addresses and vice versa.

 `],
		[/* block */ 'b', ` InetAddress Caching `],
		[/* text */ 't', `

 The InetAddress class has a cache to store successful as well as
 unsuccessful host name resolutions.

 `],
		[/* block */ 'b', ` By default, when a security manager is installed, in order to
 protect against DNS spoofing attacks,
 the result of positive host name resolutions are
 cached forever. When a security manager is not installed, the default
 behavior is to cache entries for a finite (implementation dependent)
 period of time. The result of unsuccessful host
 name resolution is cached for a very short period of time (10
 seconds) to improve performance.

 `],
		[/* block */ 'b', ` If the default behavior is not desired, then a Java security property
 can be set to a different Time-to-live (TTL) value for positive
 caching. Likewise, a system admin can configure a different
 negative caching TTL value when needed.

 `],
		[/* block */ 'b', ` Two Java security properties control the TTL values used for
  positive and negative host name resolution caching:

 `],
		[/* dl */ 'dl', [
			[/* dt */ 'dt', [
				[/* text */ 't', `networkaddress.cache.ttl`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Indicates the caching policy for successful name lookups from
 the name service. The value is specified as an integer to indicate
 the number of seconds to cache the successful lookup. The default
 setting is to cache for an implementation specific period of time.
 `],
				[/* block */ 'b', `
 A value of -1 indicates "cache forever".
 `]
			]],
			[/* dt */ 'dt', [
				[/* text */ 't', `networkaddress.cache.negative.ttl`],
				[/* text */ 't', ` (default: 10)`]
			]],
			[/* dd */ 'dd', [
				[/* text */ 't', `Indicates the caching policy for un-successful name lookups
 from the name service. The value is specified as an integer to
 indicate the number of seconds to cache the failure for
 un-successful lookups.
 `],
				[/* block */ 'b', `
 A value of 0 indicates "never cache".
 A value of -1 indicates "cache forever".
 `]
			]]
		]],
		[/* block */ 'b', '']
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
				[/* text */ 't', ` and it represents the same IP address as
 this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Two instances of `],
					[/* inline code block */ 'i', `InetAddress`],
					[/* text */ 't', ` represent the same IP
 address if the length of the byte arrays returned by
 `],
					[/* inline code block */ 'i', `getAddress`],
					[/* text */ 't', ` is the same for both, and each of the
 array components is the same for the byte arrays.`]
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
		[/* method */ 'isAnyLocalAddress()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the InetAddress is a wildcard address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the InetAddress is
         a wildcard address.`]
			]
		]],
		[/* method */ 'isLinkLocalAddress()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the InetAddress is an link local address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the InetAddress is
 a link local address; or false if address is not a link local unicast address.`]
			]
		]],
		[/* method */ 'isLoopbackAddress()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the InetAddress is a loopback address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the InetAddress is
 a loopback address; or false otherwise.`]
			]
		]],
		[/* method */ 'isMCGlobal()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the multicast address has global scope.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address has
         is a multicast address of global scope, false if it is not
         of global scope or it is not a multicast address`]
			]
		]],
		[/* method */ 'isMCLinkLocal()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the multicast address has link scope.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address has
         is a multicast address of link-local scope, false if it is not
         of link-local scope or it is not a multicast address`]
			]
		]],
		[/* method */ 'isMCNodeLocal()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the multicast address has node scope.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address has
         is a multicast address of node-local scope, false if it is not
         of node-local scope or it is not a multicast address`]
			]
		]],
		[/* method */ 'isMCOrgLocal()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the multicast address has organization scope.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address has
         is a multicast address of organization-local scope,
         false if it is not of organization-local scope
         or it is not a multicast address`]
			]
		]],
		[/* method */ 'isMCSiteLocal()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the multicast address has site scope.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address has
         is a multicast address of site-local scope, false if it is not
         of site-local scope or it is not a multicast address`]
			]
		]],
		[/* method */ 'isMulticastAddress()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the InetAddress is an
 IP multicast address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the InetAddress is
 an IP multicast address`]
			]
		]],
		[/* method */ 'isReachable(int)', [
			[/* method description */
				[/* text */ 't', `Test whether that address is reachable. Best effort is made by the
 implementation to try to reach the host, but firewalls and server
 configuration may block requests resulting in a unreachable status
 while some specific ports may be accessible.
 A typical implementation will use ICMP ECHO REQUESTs if the
 privilege can be obtained, otherwise it will try to establish
 a TCP connection on port 7 (Echo) of the destination host.
 `],
				[/* block */ 'b', `
 The timeout value, in milliseconds, indicates the maximum amount of time
 the try should take. If the operation times out before getting an
 answer, the host is deemed unreachable. A negative value will result
 in an IllegalArgumentException being thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the time, in milliseconds, before the call aborts`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if a network error occurs`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', ` is negative.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address is reachable.`]
			]
		]],
		[/* method */ 'isReachable(java.net.NetworkInterface,int,int)', [
			[/* method description */
				[/* text */ 't', `Test whether that address is reachable. Best effort is made by the
 implementation to try to reach the host, but firewalls and server
 configuration may block requests resulting in a unreachable status
 while some specific ports may be accessible.
 A typical implementation will use ICMP ECHO REQUESTs if the
 privilege can be obtained, otherwise it will try to establish
 a TCP connection on port 7 (Echo) of the destination host.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 The `],
					[/* inline code block */ 'i', `network interface`],
					[/* text */ 't', ` and `],
					[/* inline code block */ 'i', `ttl`],
					[/* text */ 't', ` parameters
 let the caller specify which network interface the test will go through
 and the maximum number of hops the packets should go through.
 A negative value for the `],
					[/* inline code block */ 'i', `ttl`],
					[/* text */ 't', ` will result in an
 IllegalArgumentException being thrown.
 `]
				]],
				[/* block */ 'b', `
 The timeout value, in milliseconds, indicates the maximum amount of time
 the try should take. If the operation times out before getting an
 answer, the host is deemed unreachable. A negative value will result
 in an IllegalArgumentException being thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'netif', [/* parameter description */
					[/* text */ 't', `the NetworkInterface through which the
                    test will be done, or null for any interface`]
				]],
				[/* parameter */ 'ttl', [/* parameter description */
					[/* text */ 't', `the maximum numbers of hops to try or 0 for the
                  default`]
				]],
				[/* parameter */ 'timeout', [/* parameter description */
					[/* text */ 't', `the time, in milliseconds, before the call aborts`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if either `],
					[/* inline code block */ 'i', `timeout`],
					[/* text */ 't', `
                          or `],
					[/* inline code block */ 'i', `ttl`],
					[/* text */ 't', ` are negative.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if a network error occurs`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the address is reachable.`]
			]
		]],
		[/* method */ 'isSiteLocalAddress()', [
			[/* method description */
				[/* text */ 't', `Utility routine to check if the InetAddress is a site local address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `boolean`],
				[/* text */ 't', ` indicating if the InetAddress is
 a site local address; or false if address is not a site local unicast address.`]
			]
		]],
		[/* method */ 'getAddress()', [
			[/* method description */
				[/* text */ 't', `Returns the raw IP address of this `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', `
 object. The result is in network byte order: the highest order
 byte of the address is in `],
				[/* inline code block */ 'i', `getAddress()[0]`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the raw IP address of this object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hashcode for this IP address.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code value for this IP address.`]
			]
		]],
		[/* method */ 'getCanonicalHostName()', [
			[/* method description */
				[/* text */ 't', `Gets the fully qualified domain name for this IP address.
 Best effort method, meaning we may not be able to return
 the FQDN depending on the underlying system configuration.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, this method first
 calls its `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method
 with the hostname and `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 as its arguments to see if the calling code is allowed to know
 the hostname for this IP address, i.e., to connect to the host.
 If the operation is not allowed, it will return
 the textual representation of the IP address.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the fully qualified domain name for this IP address,
    or if the operation is not allowed by the security check,
    the textual representation of the IP address.`]
			]
		]],
		[/* method */ 'getHostAddress()', [
			[/* method description */
				[/* text */ 't', `Returns the IP address string in textual presentation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the raw IP address in a string format.`]
			]
		]],
		[/* method */ 'getHostName()', [
			[/* method description */
				[/* text */ 't', `Gets the host name for this IP address.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this InetAddress was created with a host name,
 this host name will be remembered and returned;
 otherwise, a reverse name lookup will be performed
 and the result will be returned based on the system
 configured name lookup service. If a lookup of the name service
 is required, call
 `],
					[/* reference */ 'r', `#getCanonicalHostName()`, `getCanonicalHostName`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its
 `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method is first called
 with the hostname and `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 as its arguments to see if the operation is allowed.
 If the operation is not allowed, it will return
 the textual representation of the IP address.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the host name for this IP address, or if the operation
    is not allowed by the security check, the textual
    representation of the IP address.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Converts this IP address to a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', `. The
 string returned is of the form: hostname / literal IP
 address.

 If the host name is unresolved, no reverse name service lookup
 is performed. The hostname part will be represented by an empty string.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this IP address.`]
			]
		]],
		[/* method */ 'getByAddress(byte[])', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', ` object given the raw IP address .
 The argument is in network byte order: the highest order
 byte of the address is in `],
				[/* inline code block */ 'i', `getAddress()[0]`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', ` This method doesn't block, i.e. no reverse name service lookup
 is performed.

 `],
				[/* block */ 'b', ` IPv4 address byte array must be 4 bytes long and IPv6 byte array
 must be 16 bytes long`]
			],
			[/* parameters */
				[/* parameter */ 'addr', [/* parameter description */
					[/* text */ 't', `the raw IP address in network byte order`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.UnknownHostException', [/* throw description */
					[/* text */ 't', `if IP address is of illegal length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an InetAddress object created from the raw IP address.`]
			]
		]],
		[/* method */ 'getByAddress(java.lang.String,byte[])', [
			[/* method description */
				[/* text */ 't', `Creates an InetAddress based on the provided host name and IP address.
 No name service is checked for the validity of the address.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The host name can either be a machine name, such as
 "`],
					[/* inline code block */ 'i', `www.example.com`],
					[/* text */ 't', `", or a textual representation of its IP
 address.
 `]
				]],
				[/* block */ 'b', ` No validity checking is done on the host name either.

 `],
				[/* block */ 'b', ` If addr specifies an IPv4 address an instance of Inet4Address
 will be returned; otherwise, an instance of Inet6Address
 will be returned.

 `],
				[/* block */ 'b', ` IPv4 address byte array must be 4 bytes long and IPv6 byte array
 must be 16 bytes long`]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the specified host`]
				]],
				[/* parameter */ 'addr', [/* parameter description */
					[/* text */ 't', `the raw IP address in network byte order`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.UnknownHostException', [/* throw description */
					[/* text */ 't', `if IP address is of illegal length`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an InetAddress object created from the raw IP address.`]
			]
		]],
		[/* method */ 'getByName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Determines the IP address of a host, given the host's name.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The host name can either be a machine name, such as
 "`],
					[/* inline code block */ 'i', `www.example.com`],
					[/* text */ 't', `", or a textual representation of its
 IP address. If a literal IP address is supplied, only the
 validity of the address format is checked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` For `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` specified in literal IPv6 address,
 either the form defined in RFC 2732 or the literal IPv6 address
 format defined in RFC 2373 is accepted. IPv6 scoped addresses are also
 supported. See `],
					[/* reference */ 'r', `.Inet6Address#scoped`],
					[/* text */ 't', ` for a description of IPv6
 scoped addresses.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the host is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `host.length()`],
					[/* text */ 't', ` is equal
 to zero, then an `],
					[/* inline code block */ 'i', `InetAddress`],
					[/* text */ 't', ` representing an address of the
 loopback interface is returned.
 See `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc3330.txt`, `RFC 3330`],
					[/* text */ 't', `
 section 2 and `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373`],
					[/* text */ 't', `
 section 2.5.3.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, and `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `host.length()`],
					[/* text */ 't', ` is not equal to zero, the security manager's
 `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method is called with the hostname and `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 as its arguments to determine if the operation is allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the specified host, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.UnknownHostException', [/* throw description */
					[/* text */ 't', `if no IP address for the
               `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` could be found, or if a scope_id was specified
               for a global IPv6 address.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists
             and its checkConnect method doesn't allow the operation`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an IP address for the given host name.`]
			]
		]],
		[/* method */ 'getLocalHost()', [
			[/* method description */
				[/* text */ 't', `Returns the address of the local host. This is achieved by retrieving
 the name of the host from the system, then resolving that name into
 an `],
				[/* inline code block */ 'i', `InetAddress`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', `Note: The resolved address may be cached for a short period of time.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager, its
 `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method is called
 with the local host name and `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 as its arguments to see if the operation is allowed.
 If the operation is not allowed, an InetAddress representing
 the loopback address is returned.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.net.UnknownHostException', [/* throw description */
					[/* text */ 't', `if the local host name could not
             be resolved into an address.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the address of the local host.`]
			]
		]],
		[/* method */ 'getLoopbackAddress()', [
			[/* method description */
				[/* text */ 't', `Returns the loopback address.
 `],
				[/* block */ 'b', `
 The InetAddress returned will represent the IPv4
 loopback address, 127.0.0.1, or the IPv6 loopback
 address, ::1. The IPv4 loopback address returned
 is only one of many in the form 127.*.*.*`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the InetAddress loopback instance.`]
			]
		]],
		[/* method */ 'getAllByName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Given the name of a host, returns an array of its IP addresses,
 based on the configured name service on the system.

 `],
				[/* block */ 'b', [
					[/* text */ 't', ` The host name can either be a machine name, such as
 "`],
					[/* inline code block */ 'i', `www.example.com`],
					[/* text */ 't', `", or a textual representation of its IP
 address. If a literal IP address is supplied, only the
 validity of the address format is checked.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` For `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` specified in `],
					[/* text */ 't', `literal IPv6 address`],
					[/* text */ 't', `,
 either the form defined in RFC 2732 or the literal IPv6 address
 format defined in RFC 2373 is accepted. A literal IPv6 address may
 also be qualified by appending a scoped zone identifier or scope_id.
 The syntax and usage of scope_ids is described
 `],
					[/* reference */ 'r', `.Inet6Address#scoped`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If the host is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `host.length()`],
					[/* text */ 't', ` is equal
 to zero, then an `],
					[/* inline code block */ 'i', `InetAddress`],
					[/* text */ 't', ` representing an address of the
 loopback interface is returned.
 See `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc3330.txt`, `RFC 3330`],
					[/* text */ 't', `
 section 2 and `],
					[/* external link */ 'a', `http://www.ietf.org/rfc/rfc2373.txt`, `RFC 2373`],
					[/* text */ 't', `
 section 2.5.3. `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', ` If there is a security manager, and `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` is not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `
 or `],
					[/* inline code block */ 'i', `host.length()`],
					[/* text */ 't', ` is not equal to zero, the security manager's
 `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method is called with the hostname and `],
					[/* inline code block */ 'i', `-1`],
					[/* text */ 't', `
 as its arguments to determine if the operation is allowed.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'host', [/* parameter description */
					[/* text */ 't', `the name of the host, or `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.UnknownHostException', [/* throw description */
					[/* text */ 't', `if no IP address for the
               `],
					[/* inline code block */ 'i', `host`],
					[/* text */ 't', ` could be found, or if a scope_id was specified
               for a global IPv6 address.`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
               `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` method doesn't allow the operation.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of all the IP addresses for a given host name.`]
			]
		]]
	],
]);
