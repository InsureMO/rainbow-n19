import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.net.NetworkInterface', [
	[/* class description */
		[/* text */ 't', `This class represents a Network Interface made up of a name,
 and a list of IP addresses assigned to this interface.
 It is used to identify the local interface on which a multicast group
 is joined.

 Interfaces are normally known by names such as "le0".`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compares this object against the specified object.
 The result is `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the argument is
 not `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` and it represents the same NetworkInterface
 as this object.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 Two instances of `],
					[/* inline code block */ 'i', `NetworkInterface`],
					[/* text */ 't', ` represent the same
 NetworkInterface if both the name and the set of `],
					[/* inline code block */ 'i', `InetAddress`],
					[/* text */ 't', `es
 bound to the interfaces are equal.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to compare against.`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the objects are the same;
          `],
				[/* inline code block */ 'i', `false`],
				[/* text */ 't', ` otherwise.`]
			]
		]],
		[/* method */ 'isLoopback()', [
			[/* method description */
				[/* text */ 't', `Returns whether a network interface is a loopback interface.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the interface is a loopback interface.`]
			]
		]],
		[/* method */ 'isPointToPoint()', [
			[/* method description */
				[/* text */ 't', `Returns whether a network interface is a point to point interface.
 A typical point to point interface would be a PPP connection through
 a modem.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the interface is a point to point
          interface.`]
			]
		]],
		[/* method */ 'isUp()', [
			[/* method description */
				[/* text */ 't', `Returns whether a network interface is up and running.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the interface is up and running.`]
			]
		]],
		[/* method */ 'isVirtual()', [
			[/* method description */
				[/* text */ 't', `Returns whether this interface is a virtual interface (also called
 subinterface).
 Virtual interfaces are, on some systems, interfaces created as a child
 of a physical interface and given different settings (like address or
 MTU). Usually the name of the interface will the name of the parent
 followed by a colon (:) and a number identifying the child since there
 can be several virtual interfaces attached to a single physical
 interface.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this interface is a virtual interface.`]
			]
		]],
		[/* method */ 'supportsMulticast()', [
			[/* method description */
				[/* text */ 't', `Returns whether a network interface supports multicasting or not.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if the interface supports Multicasting.`]
			]
		]],
		[/* method */ 'getHardwareAddress()', [
			[/* method description */
				[/* text */ 't', `Returns the hardware address (usually MAC) of the interface if it
 has one and if it can be accessed given the current privileges.
 If a security manager is set, then the caller must have
 the permission `],
				[/* reference */ 'r', `java.net.NetPermission`, `NetPermission`],
				[/* text */ 't', `("getNetworkInformation").`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a byte array containing the address, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
          the address doesn't exist, is not accessible or a security
          manager is set and the caller does not have the permission
          NetPermission("getNetworkInformation")`]
			]
		]],
		[/* method */ 'getIndex()', [
			[/* method description */
				[/* text */ 't', `Returns the index of this network interface. The index is an integer greater
 or equal to zero, or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` for unknown. This is a system specific value
 and interfaces with the same name can have different indexes on different
 machines.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the index of this network interface or `],
				[/* inline code block */ 'i', `-1`],
				[/* text */ 't', ` if the index is
         unknown`]
			]
		]],
		[/* method */ 'getMTU()', [
			[/* method description */
				[/* text */ 't', `Returns the Maximum Transmission Unit (MTU) of this interface.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the value of the MTU for that interface.`]
			]
		]],
		[/* method */ 'hashCode()', UDF],
		[/* method */ 'getDisplayName()', [
			[/* method description */
				[/* text */ 't', `Get the display name of this network interface.
 A display name is a human readable String describing the network
 device.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a non-empty string representing the display name of this network
         interface, or null if no display name is available.`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Get the name of this network interface.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of this network interface`]
			]
		]],
		[/* method */ 'toString()', UDF],
		[/* method */ 'getParent()', [
			[/* method description */
				[/* text */ 't', `Returns the parent NetworkInterface of this interface if this is
 a subinterface, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if it is a physical
 (non virtual) interface or has no parent.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `The `],
				[/* inline code block */ 'i', `NetworkInterface`],
				[/* text */ 't', ` this interface is attached to.`]
			]
		]],
		[/* method */ 'getInetAddresses()', [
			[/* method description */
				[/* text */ 't', `Get an Enumeration with all or a subset of the InetAddresses bound to
 this network interface.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', `
 method is called for each InetAddress. Only InetAddresses where
 the `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` doesn't throw a SecurityException
 will be returned in the Enumeration. However, if the caller has the
 `],
					[/* reference */ 'r', `java.net.NetPermission`, `NetPermission`],
					[/* text */ 't', `("getNetworkInformation") permission, then all
 InetAddresses are returned.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an Enumeration object with all or a subset of the InetAddresses
 bound to this network interface`]
			]
		]],
		[/* method */ 'getSubInterfaces()', [
			[/* method description */
				[/* text */ 't', `Get an Enumeration with all the subinterfaces (also known as virtual
 interfaces) attached to this network interface.
 `],
				[/* block */ 'b', `
 For instance eth0:1 will be a subinterface to eth0.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an Enumeration object with all of the subinterfaces
 of this network interface`]
			]
		]],
		[/* method */ 'getInterfaceAddresses()', [
			[/* method description */
				[/* text */ 't', `Get a List of all or a subset of the `],
				[/* inline code block */ 'i', `InterfaceAddresses`],
				[/* text */ 't', `
 of this network interface.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', `
 method is called with the InetAddress for each InterfaceAddress.
 Only InterfaceAddresses where the `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` doesn't throw
 a SecurityException will be returned in the List.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `List`],
				[/* text */ 't', ` object with all or a subset of the
         InterfaceAddress of this network interface`]
			]
		]],
		[/* method */ 'inetAddresses()', [
			[/* method description */
				[/* text */ 't', `Get a Stream of all or a subset of the InetAddresses bound to this
 network interface.
 `],
				[/* block */ 'b', [
					[/* text */ 't', `
 If there is a security manager, its `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', `
 method is called for each InetAddress. Only InetAddresses where
 the `],
					[/* inline code block */ 'i', `checkConnect`],
					[/* text */ 't', ` doesn't throw a SecurityException will be
 returned in the Stream. However, if the caller has the
 `],
					[/* reference */ 'r', `java.net.NetPermission`, `NetPermission`],
					[/* text */ 't', `("getNetworkInformation") permission, then all
 InetAddresses are returned.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a Stream object with all or a subset of the InetAddresses
 bound to this network interface`]
			]
		]],
		[/* method */ 'subInterfaces()', [
			[/* method description */
				[/* text */ 't', `Get a Stream of all subinterfaces (also known as virtual
 interfaces) attached to this network interface.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a Stream object with all of the subinterfaces
 of this network interface`]
			]
		]],
		[/* method */ 'getByIndex(int)', [
			[/* method description */
				[/* text */ 't', `Get a network interface given its index.`]
			],
			[/* parameters */
				[/* parameter */ 'index', [/* parameter description */
					[/* text */ 't', `an integer, the index of the interface`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if index has a negative value`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the NetworkInterface obtained from its index, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if
         there is no interface with such an index on the system`]
			]
		]],
		[/* method */ 'getByInetAddress(java.net.InetAddress)', [
			[/* method description */
				[/* text */ 't', `Convenience method to search for a network interface that
 has the specified Internet Protocol (IP) address bound to
 it.
 `],
				[/* block */ 'b', `
 If the specified IP address is bound to multiple network
 interfaces it is not defined which network interface is
 returned.`]
			],
			[/* parameters */
				[/* parameter */ 'addr', [/* parameter description */
					[/* text */ 't', `The `],
					[/* inline code block */ 'i', `InetAddress`],
					[/* text */ 't', ` to search with.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified address is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `NetworkInterface`],
				[/* text */ 't', `
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no network interface
          with the specified IP address.`]
			]
		]],
		[/* method */ 'getByName(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Searches for the network interface with the specified name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `The name of the network interface.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `If an I/O error occurs.`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If the specified name is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `A `],
				[/* inline code block */ 'i', `NetworkInterface`],
				[/* text */ 't', ` with the specified name,
          or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` if there is no network interface
          with the specified name.`]
			]
		]],
		[/* method */ 'getNetworkInterfaces()', [
			[/* method description */
				[/* text */ 't', `Returns an `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` of all the interfaces on this machine. The
 `],
				[/* inline code block */ 'i', `Enumeration`],
				[/* text */ 't', ` contains at least one element, possibly representing
 a loopback interface that only supports communication between entities on
 this machine.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs,
             or if the platform does not have at least one configured
             network interface.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an Enumeration of NetworkInterfaces found on this machine`]
			]
		]],
		[/* method */ 'networkInterfaces()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` of all the interfaces on this machine.  The
 `],
				[/* inline code block */ 'i', `Stream`],
				[/* text */ 't', ` contains at least one interface, possibly representing a
 loopback interface that only supports communication between entities on
 this machine.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.net.SocketException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs,
             or if the platform does not have at least one configured
             network interface.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a Stream of NetworkInterfaces found on this machine`]
			]
		]]
	],
	/* enum values */ UDF
]);
