import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectOutputStream', [
	[/* class description */
		[/* text */ 't', `An ObjectOutputStream writes primitive data types and graphs of Java objects
 to an OutputStream.  The objects can be read (reconstituted) using an
 ObjectInputStream.  Persistent storage of objects can be accomplished by
 using a file for the stream.  If the stream is a network socket stream, the
 objects can be reconstituted on another host or in another process.

 `],
		[/* block */ 'b', `Only objects that support the java.io.Serializable interface can be
 written to streams.  The class of each serializable object is encoded
 including the class name and signature of the class, the values of the
 object's fields and arrays, and the closure of any other objects referenced
 from the initial objects.

 `],
		[/* block */ 'b', `The method writeObject is used to write an object to the stream.  Any
 object, including Strings and arrays, is written with writeObject. Multiple
 objects or primitives can be written to the stream.  The objects must be
 read back from the corresponding ObjectInputstream with the same types and
 in the same order as they were written.

 `],
		[/* block */ 'b', `Primitive data types can also be written to the stream using the
 appropriate methods from DataOutput. Strings can also be written using the
 writeUTF method.

 `],
		[/* block */ 'b', `The default serialization mechanism for an object writes the class of the
 object, the class signature, and the values of all non-transient and
 non-static fields.  References to other objects (except in transient or
 static fields) cause those objects to be written also. Multiple references
 to a single object are encoded using a reference sharing mechanism so that
 graphs of objects can be restored to the same shape as when the original was
 written.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For example to write an object that can be read by the example in
 ObjectInputStream:
 `],
			[/* new line */ 'n']
		]],
		[/* code block */ 'c', `      FileOutputStream fos = new FileOutputStream("t.tmp");
      ObjectOutputStream oos = new ObjectOutputStream(fos);

      oos.writeInt(12345);
      oos.writeObject("Today");
      oos.writeObject(new Date());

      oos.close();
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', [
			[/* text */ 't', `Classes that require special handling during the serialization and
 deserialization process must implement special methods with these exact
 signatures:
 `],
			[/* new line */ 'n']
		]],
		[/* code block */ 'c', ` private void readObject(java.io.ObjectInputStream stream)
     throws IOException, ClassNotFoundException;
 private void writeObject(java.io.ObjectOutputStream stream)
     throws IOException
 private void readObjectNoData()
     throws ObjectStreamException;
 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `The writeObject method is responsible for writing the state of the object
 for its particular class so that the corresponding readObject method can
 restore it.  The method does not need to concern itself with the state
 belonging to the object's superclasses or subclasses.  State is saved by
 writing the individual fields to the ObjectOutputStream using the
 writeObject method or by using the methods for primitive data types
 supported by DataOutput.

 `],
		[/* block */ 'b', `Serialization does not write out the fields of any object that does not
 implement the java.io.Serializable interface.  Subclasses of Objects that
 are not serializable can be serializable. In this case the non-serializable
 class must have a no-arg constructor to allow its fields to be initialized.
 In this case it is the responsibility of the subclass to save and restore
 the state of the non-serializable class. It is frequently the case that the
 fields of that class are accessible (public, package, or protected) or that
 there are get and set methods that can be used to restore the state.

 `],
		[/* block */ 'b', `Serialization of an object can be prevented by implementing writeObject
 and readObject methods that throw the NotSerializableException.  The
 exception will be caught by the ObjectOutputStream and abort the
 serialization process.

 `],
		[/* block */ 'b', `Implementing the Externalizable interface allows the object to assume
 complete control over the contents and format of the object's serialized
 form.  The methods of the Externalizable interface, writeExternal and
 readExternal, are called to save and restore the objects state.  When
 implemented by a class they can write and read their own state using all of
 the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 the objects to handle any versioning that occurs.

 `],
		[/* block */ 'b', `Enum constants are serialized differently than ordinary serializable or
 externalizable objects.  The serialized form of an enum constant consists
 solely of its name; field values of the constant are not transmitted.  To
 serialize an enum constant, ObjectOutputStream writes the string returned by
 the constant's name method.  Like other serializable or externalizable
 objects, enum constants can function as the targets of back references
 appearing subsequently in the serialization stream.  The process by which
 enum constants are serialized cannot be customized; any class-specific
 writeObject and writeReplace methods defined by enum types are ignored
 during serialization.  Similarly, any serialPersistentFields or
 serialVersionUID field declarations are also ignored--all enum types have a
 fixed serialVersionUID of 0L.

 `],
		[/* block */ 'b', `Primitive data, excluding serializable fields and externalizable data, is
 written to the ObjectOutputStream in block-data records. A block data record
 is composed of a header and data. The block data header consists of a marker
 and the number of bytes to follow the header.  Consecutive primitive data
 writes are merged into one block-data record.  The blocking factor used for
 a block-data record will be 1024 bytes.  Each block-data record will be
 filled up to 1024 bytes, or be written whenever there is a termination of
 block-data mode.  Calls to the ObjectOutputStream methods writeObject,
 defaultWriteObject and writeFields initially terminate any existing
 block-data record.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Records are serialized differently than ordinary serializable or externalizable
 objects, see `],
			[/* reference */ 'r', `.ObjectInputStream#record-serialization`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.io.OutputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates an ObjectOutputStream that writes to the specified OutputStream.
 This constructor writes the serialization stream header to the
 underlying stream; callers may wish to flush the stream immediately to
 ensure that constructors for receiving ObjectInputStreams will not block
 when reading the header.

 `],
				[/* block */ 'b', `If a security manager is installed, this constructor will check for
 the "enableSubclassImplementation" SerializablePermission when invoked
 directly or indirectly by the constructor of a subclass which overrides
 the ObjectOutputStream.putFields or ObjectOutputStream.writeUnshared
 methods.`]
			],
			[/* parameters */
				[/* parameter */ 'out', [/* parameter description */
					[/* text */ 't', `output stream to write to`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while writing stream header`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if untrusted subclass illegally overrides
          security-sensitive methods`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `out`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]],
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Provide a way for subclasses that are completely reimplementing
 ObjectOutputStream to not have to allocate private data just used by
 this implementation of ObjectOutputStream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager installed, this method first calls the
 security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method with a
 `],
					[/* inline code block */ 'i', `SerializablePermission("enableSubclassImplementation")`],
					[/* text */ 't', `
 permission to ensure it's ok to enable subclassing.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
          `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies enabling
          subclassing.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while creating this stream`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'flush()', [
			[/* method description */
				[/* text */ 't', `Flushes the stream. This will write any buffered output bytes and flush
 through to the underlying stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(int)', [
			[/* method description */
				[/* text */ 't', `Writes a byte. This method will block until the byte is actually
 written.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the byte to be written to the stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[])', [
			[/* method description */
				[/* text */ 't', `Writes an array of bytes. This method will block until the bytes are
 actually written.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'write(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Writes a sub array of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the data to be written`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the data`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes that are written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'defaultWriteObject()', [
			[/* method description */
				[/* text */ 't', `Write the non-static and non-transient fields of the current class to
 this stream.  This may only be called from the writeObject method of the
 class being serialized. It will throw the NotActiveException if it is
 called otherwise.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          `],
					[/* inline code block */ 'i', `OutputStream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeObject(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Write the specified object to the ObjectOutputStream.  The class of the
 object, the signature of the class, and the values of the non-transient
 and non-static fields of the class and all of its supertypes are
 written.  Default serialization for a class can be overridden using the
 writeObject and the readObject methods.  Objects referenced by this
 object are written transitively so that a complete equivalent graph of
 objects can be reconstructed by an ObjectInputStream.

 `],
				[/* block */ 'b', `Exceptions are thrown for problems with the OutputStream and for
 classes that should not be serialized.  All exceptions are fatal to the
 OutputStream, which is left in an indeterminate state, and it is up to
 the caller to ignore or recover the stream state.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.InvalidClassException', [/* throw description */
					[/* text */ 't', `Something is wrong with a class used by
          serialization.`]
				]],
				[/* throw */ 'java.io.NotSerializableException', [/* throw description */
					[/* text */ 't', `Some object to be serialized does not
          implement the java.io.Serializable interface.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any exception thrown by the underlying
          OutputStream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'putFields()', [
			[/* method description */
				[/* text */ 't', `Retrieve the object used to buffer persistent fields to be written to
 the stream.  The fields will be written to the stream when writeFields
 method is called.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an instance of the class Putfield that holds the serializable
          fields`]
			]
		]],
		[/* method */ 'writeFields()', [
			[/* method description */
				[/* text */ 't', `Write the buffered fields to the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]],
				[/* throw */ 'java.io.NotActiveException', [/* throw description */
					[/* text */ 't', `Called when a classes writeObject method was
          not called to write the state of the object.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the stream. This method must be called to release any resources
 associated with the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeInt(int)', [
			[/* method description */
				[/* text */ 't', `Writes a 32 bit int.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the integer value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'reset()', [
			[/* method description */
				[/* text */ 't', `Reset will disregard the state of any objects already written to the
 stream.  The state is reset to be the same as a new ObjectOutputStream.
 The current point in the stream is marked as reset so the corresponding
 ObjectInputStream will be reset at the same point.  Objects previously
 written to the stream will not be referred to as already being in the
 stream.  They will be written to the stream again.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if reset() is invoked while serializing an object.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeUTF(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Primitive data write of this String in
 `],
				[/* reference */ 'r', `.DataInput#modified-utf-8`],
				[/* text */ 't', `
 format.  Note that there is a
 significant difference between writing a String into the stream as
 primitive data or as an Object. A String instance written by writeObject
 is written into the stream as a String initially. Future writeObject()
 calls write references to the string into the stream.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the String to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBytes(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a String as a sequence of bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the String of bytes to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChar(int)', [
			[/* method description */
				[/* text */ 't', `Writes a 16 bit char.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the char value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeFloat(float)', [
			[/* method description */
				[/* text */ 't', `Writes a 32 bit float.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the float value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeBoolean(boolean)', [
			[/* method description */
				[/* text */ 't', `Writes a boolean.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the boolean to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeByte(int)', [
			[/* method description */
				[/* text */ 't', `Writes an 8 bit byte.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the byte value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeShort(int)', [
			[/* method description */
				[/* text */ 't', `Writes a 16 bit short.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the short value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeLong(long)', [
			[/* method description */
				[/* text */ 't', `Writes a 64 bit long.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the long value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeDouble(double)', [
			[/* method description */
				[/* text */ 't', `Writes a 64 bit double.`]
			],
			[/* parameters */
				[/* parameter */ 'val', [/* parameter description */
					[/* text */ 't', `the double value to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeChars(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Writes a String as a sequence of chars.`]
			],
			[/* parameters */
				[/* parameter */ 'str', [/* parameter description */
					[/* text */ 't', `the String of chars to be written`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeStreamHeader()', [
			[/* method description */
				[/* text */ 't', `The writeStreamHeader method is provided so subclasses can append or
 prepend their own header to the stream.  It writes the magic number and
 version to the stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeObjectOverride(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Method used by subclasses to override the default writeObject method.
 This method is called by trusted subclasses of ObjectOutputStream that
 constructed ObjectOutputStream using the protected no-arg constructor.
 The subclass is expected to provide an override method with the modifier
 "final".`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `object to be written to the underlying stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while writing to the
          underlying stream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'replaceObject(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `This method will allow trusted subclasses of ObjectOutputStream to
 substitute one object for another during serialization. Replacing
 objects is disabled until enableReplaceObject is called. The
 enableReplaceObject method checks that the stream requesting to do
 replacement can be trusted.  The first occurrence of each object written
 into the serialization stream is passed to replaceObject.  Subsequent
 references to the object are replaced by the object returned by the
 original call to replaceObject.  To ensure that the private state of
 objects is not unintentionally exposed, only trusted streams may use
 replaceObject.

 `],
				[/* block */ 'b', `The ObjectOutputStream.writeObject method takes a parameter of type
 Object (as opposed to type Serializable) to allow for cases where
 non-serializable objects are replaced by serializable ones.

 `],
				[/* block */ 'b', `When a subclass is replacing objects it must insure that either a
 complementary substitution must be made during deserialization or that
 the substituted object is compatible with every field where the
 reference will be stored.  Objects whose type is not a subclass of the
 type of the field or array element abort the serialization by raising an
 exception and the object is not be stored.

 `],
				[/* block */ 'b', `This method is called only once when each object is first
 encountered.  All subsequent references to the object will be redirected
 to the new object. This method should return the object to be
 substituted or the original object.

 `],
				[/* block */ 'b', `Null can be returned as the object to be substituted, but may cause
 NullReferenceException in classes that contain references to the
 original object since they may be expecting an object instead of
 null.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be replaced`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any exception thrown by the underlying
          OutputStream.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the alternate object that replaced the specified one`]
			]
		]],
		[/* method */ 'annotateProxyClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Subclasses may implement this method to store custom data in the stream
 along with descriptors for dynamic proxy classes.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `This method is called exactly once for each unique proxy class
 descriptor in the stream.  The default implementation of this method in
 `],
					[/* inline code block */ 'i', `ObjectOutputStream`],
					[/* text */ 't', ` does nothing.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The corresponding method in `],
					[/* inline code block */ 'i', `ObjectInputStream`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `resolveProxyClass`],
					[/* text */ 't', `.  For a given subclass of
 `],
					[/* inline code block */ 'i', `ObjectOutputStream`],
					[/* text */ 't', ` that overrides this method, the
 `],
					[/* inline code block */ 'i', `resolveProxyClass`],
					[/* text */ 't', ` method in the corresponding subclass of
 `],
					[/* inline code block */ 'i', `ObjectInputStream`],
					[/* text */ 't', ` must read any data or objects written by
 `],
					[/* inline code block */ 'i', `annotateProxyClass`],
					[/* text */ 't', `.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `the proxy class to annotate custom data for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `any exception thrown by the underlying
          `],
					[/* inline code block */ 'i', `OutputStream`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeClassDescriptor(java.io.ObjectStreamClass)', [
			[/* method description */
				[/* text */ 't', `Write the specified class descriptor to the ObjectOutputStream.  Class
 descriptors are used to identify the classes of objects written to the
 stream.  Subclasses of ObjectOutputStream may override this method to
 customize the way in which class descriptors are written to the
 serialization stream.  The corresponding method in ObjectInputStream,
 `],
				[/* inline code block */ 'i', `readClassDescriptor`],
				[/* text */ 't', `, should then be overridden to
 reconstitute the class descriptor from its custom stream representation.
 By default, this method writes class descriptors according to the format
 defined in the Object Serialization specification.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that this method will only be called if the ObjectOutputStream
 is not using the old serialization stream format (set by calling
 ObjectOutputStream's `],
					[/* inline code block */ 'i', `useProtocolVersion`],
					[/* text */ 't', ` method).  If this
 serialization stream is using the old format
 (`],
					[/* inline code block */ 'i', `PROTOCOL_VERSION_1`],
					[/* text */ 't', `), the class descriptor will be written
 internally in a manner that cannot be overridden or customized.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'desc', [/* parameter description */
					[/* text */ 't', `class descriptor to write to the stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'annotateClass(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Subclasses may implement this method to allow class data to be stored in
 the stream. By default this method does nothing.  The corresponding
 method in ObjectInputStream is resolveClass.  This method is called
 exactly once for each unique class in the stream.  The class name and
 signature will have already been written to the stream.  This method may
 make free use of the ObjectOutputStream to save any representation of
 the class it deems suitable (for example, the bytes of the class file).
 The resolveClass method in the corresponding subclass of
 ObjectInputStream must read and use any data or objects written by
 annotateClass.`]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `the class to annotate custom data for`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any exception thrown by the underlying
          OutputStream.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'useProtocolVersion(int)', [
			[/* method description */
				[/* text */ 't', `Specify stream protocol version to use when writing the stream.

 `],
				[/* block */ 'b', `This routine provides a hook to enable the current version of
 Serialization to write in a format that is backwards compatible to a
 previous version of the stream format.

 `],
				[/* block */ 'b', `Every effort will be made to avoid introducing additional
 backwards incompatibilities; however, sometimes there is no
 other alternative.`]
			],
			[/* parameters */
				[/* parameter */ 'version', [/* parameter description */
					[/* text */ 't', `use ProtocolVersion from java.io.ObjectStreamConstants.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if called after any objects
          have been serialized.`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if invalid version is passed in.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'writeUnshared(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Writes an "unshared" object to the ObjectOutputStream.  This method is
 identical to writeObject, except that it always writes the given object
 as a new, unique object in the stream (as opposed to a back-reference
 pointing to a previously serialized instance).  Specifically:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `An object written via writeUnshared is always serialized in the
       same manner as a newly appearing object (an object that has not
       been written to the stream yet), regardless of whether or not the
       object has been written previously.

   `],
					[/* block */ 'b', `If writeObject is used to write an object that has been previously
       written with writeUnshared, the previous writeUnshared operation
       is treated as if it were a write of a separate object.  In other
       words, ObjectOutputStream will never generate back-references to
       object data written by calls to writeUnshared.
 `]
				]],
				[/* text */ 't', `
 While writing an object via writeUnshared does not in itself guarantee a
 unique reference to the object when it is deserialized, it allows a
 single object to be defined multiple times in a stream, so that multiple
 calls to readUnshared by the receiver will not conflict.  Note that the
 rules described above only apply to the base-level object written with
 writeUnshared, and not to any transitively referenced sub-objects in the
 object graph to be serialized.

 `],
				[/* block */ 'b', `ObjectOutputStream subclasses which override this method can only be
 constructed in security contexts possessing the
 "enableSubclassImplementation" SerializablePermission; any attempt to
 instantiate such a subclass without this permission will cause a
 SecurityException to be thrown.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `object to write to stream`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.NotSerializableException', [/* throw description */
					[/* text */ 't', `if an object in the graph to be
          serialized does not implement the Serializable interface`]
				]],
				[/* throw */ 'java.io.InvalidClassException', [/* throw description */
					[/* text */ 't', `if a problem exists with the class of an
          object to be serialized`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs during serialization`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'enableReplaceObject(boolean)', [
			[/* method description */
				[/* text */ 't', `Enables the stream to do replacement of objects written to the stream.  When
 enabled, the `],
				[/* reference */ 'r', `#replaceObject(java.lang.Object)`, `replaceObject(java.lang.Object)`],
				[/* text */ 't', ` method is called for every object being
 serialized.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If object replacement is currently not enabled, and
 `],
					[/* inline code block */ 'i', `enable`],
					[/* text */ 't', ` is true, and there is a security manager installed,
 this method first calls the security manager's
 `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method with the
 `],
					[/* inline code block */ 'i', `SerializablePermission("enableSubstitution")`],
					[/* text */ 't', ` permission to
 ensure that the caller is permitted to enable the stream to do replacement
 of objects written to the stream.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'enable', [/* parameter description */
					[/* text */ 't', `true for enabling use of `],
					[/* inline code block */ 'i', `replaceObject`],
					[/* text */ 't', ` for
          every object being serialized`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
          `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies enabling the stream
          to do replacement of objects written to the stream.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous setting before this method was invoked`]
			]
		]],
		[/* method */ 'drain()', [
			[/* method description */
				[/* text */ 't', `Drain any buffered data in ObjectOutputStream.  Similar to flush but
 does not propagate the flush to the underlying stream.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occur while writing to the underlying
          stream`]
				]]
			],
			/* return */ UDF
		]]
	],
]);
