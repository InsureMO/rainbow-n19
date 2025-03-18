import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectStreamConstants', [
	[/* class description */
		[/* text */ 't', `Constants written into the Object Serialization Stream.`]
	],
	[/* fields */
		[/* field */ 'baseWireHandle', [
			[/* field description */
				[/* text */ 't', `First wire handle to be assigned.`]
			],
		]],
		[/* field */ 'PROTOCOL_VERSION_1', [
			[/* field description */
				[/* text */ 't', `A Stream Protocol Version. `],
				[/* block */ 'b', `

 All externalizable data is written in JDK 1.1 external data
 format after calling this method. This version is needed to write
 streams containing Externalizable data that can be read by
 pre-JDK 1.1.6 JVMs.`]
			],
		]],
		[/* field */ 'PROTOCOL_VERSION_2', [
			[/* field description */
				[/* text */ 't', `A Stream Protocol Version. `],
				[/* block */ 'b', `

 This protocol is written by JVM 1.2.

 Externalizable data is written in block data mode and is
 terminated with TC_ENDBLOCKDATA. Externalizable class descriptor
 flags has SC_BLOCK_DATA enabled. JVM 1.1.6 and greater can
 read this format change.

 Enables writing a nonSerializable class descriptor into the
 stream. The serialVersionUID of a nonSerializable class is
 set to 0L.`]
			],
		]],
		[/* field */ 'SC_BLOCK_DATA', [
			[/* field description */
				[/* text */ 't', `Bit mask for ObjectStreamClass flag. Indicates Externalizable data
 written in Block Data mode.
 Added for PROTOCOL_VERSION_2.`]
			],
		]],
		[/* field */ 'SC_ENUM', [
			[/* field description */
				[/* text */ 't', `Bit mask for ObjectStreamClass flag. Indicates class is an enum type.`]
			],
		]],
		[/* field */ 'SC_EXTERNALIZABLE', [
			[/* field description */
				[/* text */ 't', `Bit mask for ObjectStreamClass flag. Indicates class is Externalizable.`]
			],
		]],
		[/* field */ 'SC_SERIALIZABLE', [
			[/* field description */
				[/* text */ 't', `Bit mask for ObjectStreamClass flag. Indicates class is Serializable.`]
			],
		]],
		[/* field */ 'SC_WRITE_METHOD', [
			[/* field description */
				[/* text */ 't', `Bit mask for ObjectStreamClass flag. Indicates a Serializable class
 defines its own writeObject method.`]
			],
		]],
		[/* field */ 'SERIAL_FILTER_PERMISSION', [
			[/* field description */
				[/* text */ 't', `Enable setting the system-wide serial filter.`]
			],
		]],
		[/* field */ 'STREAM_MAGIC', [
			[/* field description */
				[/* text */ 't', `Magic number that is written to the stream header.`]
			],
		]],
		[/* field */ 'STREAM_VERSION', [
			[/* field description */
				[/* text */ 't', `Version number that is written to the stream header.`]
			],
		]],
		[/* field */ 'SUBCLASS_IMPLEMENTATION_PERMISSION', [
			[/* field description */
				[/* text */ 't', `Enable overriding of readObject and writeObject.`]
			],
		]],
		[/* field */ 'SUBSTITUTION_PERMISSION', [
			[/* field description */
				[/* text */ 't', `Enable substitution of one object for another during
 serialization/deserialization.`]
			],
		]],
		[/* field */ 'TC_ARRAY', [
			[/* field description */
				[/* text */ 't', `new Array.`]
			],
		]],
		[/* field */ 'TC_BASE', [
			[/* field description */
				[/* text */ 't', `First tag value.`]
			],
		]],
		[/* field */ 'TC_BLOCKDATA', [
			[/* field description */
				[/* text */ 't', `Block of optional data. Byte following tag indicates number
 of bytes in this block data.`]
			],
		]],
		[/* field */ 'TC_BLOCKDATALONG', [
			[/* field description */
				[/* text */ 't', `long Block data. The long following the tag indicates the
 number of bytes in this block data.`]
			],
		]],
		[/* field */ 'TC_CLASS', [
			[/* field description */
				[/* text */ 't', `Reference to Class.`]
			],
		]],
		[/* field */ 'TC_CLASSDESC', [
			[/* field description */
				[/* text */ 't', `new Class Descriptor.`]
			],
		]],
		[/* field */ 'TC_ENDBLOCKDATA', [
			[/* field description */
				[/* text */ 't', `End of optional block data blocks for an object.`]
			],
		]],
		[/* field */ 'TC_ENUM', [
			[/* field description */
				[/* text */ 't', `new Enum constant.`]
			],
		]],
		[/* field */ 'TC_EXCEPTION', [
			[/* field description */
				[/* text */ 't', `Exception during write.`]
			],
		]],
		[/* field */ 'TC_LONGSTRING', [
			[/* field description */
				[/* text */ 't', `Long string.`]
			],
		]],
		[/* field */ 'TC_MAX', [
			[/* field description */
				[/* text */ 't', `Last tag value.`]
			],
		]],
		[/* field */ 'TC_NULL', [
			[/* field description */
				[/* text */ 't', `Null object reference.`]
			],
		]],
		[/* field */ 'TC_OBJECT', [
			[/* field description */
				[/* text */ 't', `new Object.`]
			],
		]],
		[/* field */ 'TC_PROXYCLASSDESC', [
			[/* field description */
				[/* text */ 't', `new Proxy Class Descriptor.`]
			],
		]],
		[/* field */ 'TC_REFERENCE', [
			[/* field description */
				[/* text */ 't', `Reference to an object already written into the stream.`]
			],
		]],
		[/* field */ 'TC_RESET', [
			[/* field description */
				[/* text */ 't', `Reset stream context. All handles written into stream are reset.`]
			],
		]],
		[/* field */ 'TC_STRING', [
			[/* field description */
				[/* text */ 't', `new String.`]
			],
		]]
	],
	/* constructors */,
	/* methods */,
	/* enum values */ UDF
]);
