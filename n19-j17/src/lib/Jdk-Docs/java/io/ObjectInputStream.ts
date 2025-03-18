import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInputStream', [
	[/* class description */
		[/* text */ 't', `An ObjectInputStream deserializes primitive data and objects previously
 written using an ObjectOutputStream.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Warning: Deserialization of untrusted data is inherently dangerous
 and should be avoided. Untrusted data should be carefully validated according to the
 "Serialization and Deserialization" section of the
 `],
			[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=secure_coding_guidelines_javase`, `Secure Coding Guidelines for Java SE`],
			[/* text */ 't', `.
 `],
			[/* external link */ 'a', `https://docs.oracle.com/pls/topic/lookup?ctx=javase17&id=serialization_filter_guide`, `Serialization Filtering`],
			[/* text */ 't', ` describes best
 practices for defensive use of serial filters.
 `]
		]],
		[/* text */ 't', `

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The key to disabling deserialization attacks is to prevent instances of
 arbitrary classes from being deserialized, thereby preventing the direct or
 indirect execution of their methods.
 `],
			[/* reference */ 'r', `java.io.ObjectInputFilter`, `ObjectInputFilter`],
			[/* text */ 't', ` describes how to use filters and
 `],
			[/* reference */ 'r', `java.io.ObjectInputFilter.Config`, `ObjectInputFilter.Config`],
			[/* text */ 't', ` describes how to configure the filter and filter factory.
 Each stream has an optional deserialization filter
 to check the classes and resource limits during deserialization.
 The JVM-wide filter factory ensures that a filter can be set on every `],
			[/* reference */ 'r', `java.io.ObjectInputStream`, `ObjectInputStream`],
			[/* text */ 't', `
 and every object read from the stream can be checked.
 The `],
			[/* reference */ 'r', `#%3Cinit%3E()`, `ObjectInputStream constructors`],
			[/* text */ 't', ` invoke the filter factory
 to select the initial filter which may be updated or replaced by `],
			[/* reference */ 'r', `#setObjectInputFilter(java.io.ObjectInputFilter)`, `setObjectInputFilter(java.io.ObjectInputFilter)`],
			[/* text */ 't', `.
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `
 If an ObjectInputStream has a filter, the `],
			[/* reference */ 'r', `java.io.ObjectInputFilter`, `ObjectInputFilter`],
			[/* text */ 't', ` can check that
 the classes, array lengths, number of references in the stream, depth, and
 number of bytes consumed from the input stream are allowed and
 if not, can terminate deserialization.

 `]
		]],
		[/* block */ 'b', `ObjectOutputStream and ObjectInputStream can provide an application with
 persistent storage for graphs of objects when used with a FileOutputStream
 and FileInputStream respectively.  ObjectInputStream is used to recover
 those objects previously serialized. Other uses include passing objects
 between hosts using a socket stream or for marshaling and unmarshaling
 arguments and parameters in a remote communication system.

 `],
		[/* block */ 'b', `ObjectInputStream ensures that the types of all objects in the graph
 created from the stream match the classes present in the Java Virtual
 Machine.  Classes are loaded as required using the standard mechanisms.

 `],
		[/* block */ 'b', `Only objects that support the java.io.Serializable or
 java.io.Externalizable interface can be read from streams.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The method `],
			[/* inline code block */ 'i', `readObject`],
			[/* text */ 't', ` is used to read an object from the
 stream.  Java's safe casting should be used to get the desired type.  In
 Java, strings and arrays are objects and are treated as objects during
 serialization. When read they need to be cast to the expected type.

 `]
		]],
		[/* block */ 'b', `Primitive data types can be read from the stream using the appropriate
 method on DataInput.

 `],
		[/* block */ 'b', `The default deserialization mechanism for objects restores the contents
 of each field to the value and type it had when it was written.  Fields
 declared as transient or static are ignored by the deserialization process.
 References to other objects cause those objects to be read from the stream
 as necessary.  Graphs of objects are restored correctly using a reference
 sharing mechanism.  New objects are always allocated when deserializing,
 which prevents existing objects from being overwritten.

 `],
		[/* block */ 'b', `Reading an object is analogous to running the constructors of a new
 object.  Memory is allocated for the object and initialized to zero (NULL).
 No-arg constructors are invoked for the non-serializable classes and then
 the fields of the serializable classes are restored from the stream starting
 with the serializable class closest to java.lang.object and finishing with
 the object's most specific class.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For example to read from a stream as written by the example in
 ObjectOutputStream:
 `],
			[/* new line */ 'n'],
			[/* text */ 't', `
 `]
		]],
		[/* code block */ 'c', `      FileInputStream fis = new FileInputStream("t.tmp");
      ObjectInputStream ois = new ObjectInputStream(fis);

      int i = ois.readInt();
      String today = (String) ois.readObject();
      Date date = (Date) ois.readObject();

      ois.close();
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `Classes control how they are serialized by implementing either the
 java.io.Serializable or java.io.Externalizable interfaces.

 `],
		[/* block */ 'b', `Implementing the Serializable interface allows object serialization to
 save and restore the entire state of the object and it allows classes to
 evolve between the time the stream is written and the time it is read.  It
 automatically traverses references between objects, saving and restoring
 entire graphs.

 `],
		[/* block */ 'b', `Serializable classes that require special handling during the
 serialization and deserialization process should implement the following
 methods:

 `],
		[/* code block */ 'c', ` private void writeObject(java.io.ObjectOutputStream stream)
     throws IOException;
 private void readObject(java.io.ObjectInputStream stream)
     throws IOException, ClassNotFoundException;
 private void readObjectNoData()
     throws ObjectStreamException;
 `],
		[/* text */ 't', `

 `],
		[/* block */ 'b', ''],
		[/* block */ 'b', `The readObject method is responsible for reading and restoring the state
 of the object for its particular class using data written to the stream by
 the corresponding writeObject method.  The method does not need to concern
 itself with the state belonging to its superclasses or subclasses.  State is
 restored by reading data from the ObjectInputStream for the individual
 fields and making assignments to the appropriate fields of the object.
 Reading primitive data types is supported by DataInput.

 `],
		[/* block */ 'b', `Any attempt to read object data which exceeds the boundaries of the
 custom data written by the corresponding writeObject method will cause an
 OptionalDataException to be thrown with an eof field value of true.
 Non-object reads which exceed the end of the allotted data will reflect the
 end of data in the same way that they would indicate the end of the stream:
 bytewise reads will return -1 as the byte read or number of bytes read, and
 primitive reads will throw EOFExceptions.  If there is no corresponding
 writeObject method, then the end of default serialized data marks the end of
 the allotted data.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Primitive and object read calls issued from within a readExternal method
 behave in the same manner--if the stream is already positioned at the end of
 data written by the corresponding writeExternal method, object reads will
 throw OptionalDataExceptions with eof set to true, bytewise reads will
 return -1, and primitive reads will throw EOFExceptions.  Note that this
 behavior does not hold for streams written with the old
 `],
			[/* inline code block */ 'i', `ObjectStreamConstants.PROTOCOL_VERSION_1`],
			[/* text */ 't', ` protocol, in which the
 end of data written by writeExternal methods is not demarcated, and hence
 cannot be detected.

 `]
		]],
		[/* block */ 'b', `The readObjectNoData method is responsible for initializing the state of
 the object for its particular class in the event that the serialization
 stream does not list the given class as a superclass of the object being
 deserialized.  This may occur in cases where the receiving party uses a
 different version of the deserialized instance's class than the sending
 party, and the receiver's version extends classes that are not extended by
 the sender's version.  This may also occur if the serialization stream has
 been tampered; hence, readObjectNoData is useful for initializing
 deserialized objects properly despite a "hostile" or incomplete source
 stream.

 `],
		[/* block */ 'b', `Serialization does not read or assign values to the fields of any object
 that does not implement the java.io.Serializable interface.  Subclasses of
 Objects that are not serializable can be serializable. In this case the
 non-serializable class must have a no-arg constructor to allow its fields to
 be initialized.  In this case it is the responsibility of the subclass to
 save and restore the state of the non-serializable class. It is frequently
 the case that the fields of that class are accessible (public, package, or
 protected) or that there are get and set methods that can be used to restore
 the state.

 `],
		[/* block */ 'b', `Any exception that occurs while deserializing an object will be caught by
 the ObjectInputStream and abort the reading process.

 `],
		[/* block */ 'b', `Implementing the Externalizable interface allows the object to assume
 complete control over the contents and format of the object's serialized
 form.  The methods of the Externalizable interface, writeExternal and
 readExternal, are called to save and restore the objects state.  When
 implemented by a class they can write and read their own state using all of
 the methods of ObjectOutput and ObjectInput.  It is the responsibility of
 the objects to handle any versioning that occurs.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `Enum constants are deserialized differently than ordinary serializable or
 externalizable objects.  The serialized form of an enum constant consists
 solely of its name; field values of the constant are not transmitted.  To
 deserialize an enum constant, ObjectInputStream reads the constant name from
 the stream; the deserialized constant is then obtained by calling the static
 method `],
			[/* inline code block */ 'i', `Enum.valueOf(Class, String)`],
			[/* text */ 't', ` with the enum constant's
 base type and the received constant name as arguments.  Like other
 serializable or externalizable objects, enum constants can function as the
 targets of back references appearing subsequently in the serialization
 stream.  The process by which enum constants are deserialized cannot be
 customized: any class-specific readObject, readObjectNoData, and readResolve
 methods defined by enum types are ignored during deserialization.
 Similarly, any serialPersistentFields or serialVersionUID field declarations
 are also ignored--all enum types have a fixed serialVersionUID of 0L.

 `],
			[/* anchor */ 'r', '#-id', `record-serialization`, ``],
			[/* text */ 't', `
 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `Records are serialized differently than ordinary serializable or externalizable
 objects. During deserialization the record's canonical constructor is invoked
 to construct the record object. Certain serialization-related methods, such
 as readObject and writeObject, are ignored for serializable records. See
 `],
			[/* text */ 't', `Java Object Serialization Specification, Section 1.13, "Serialization of Records"`],
			[/* text */ 't', ` for additional information.`]
		]]
	],
	/* fields */,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Provide a way for subclasses that are completely reimplementing
 ObjectInputStream to not have to allocate private data just used by this
 implementation of ObjectInputStream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The constructor initializes the deserialization filter to the filter returned
 by invoking the `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `ObjectInputFilter.Config.getSerialFilterFactory()`],
					[/* text */ 't', ` with `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the current filter
 and the `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilter()`, `static JVM-wide filter`],
					[/* text */ 't', ` for the requested filter.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `If there is a security manager installed, this method first calls the
 security manager's `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method with the
 `],
					[/* inline code block */ 'i', `SerializablePermission("enableSubclassImplementation")`],
					[/* text */ 't', `
 permission to ensure it's ok to enable subclassing.`]
				]]
			],
			/* parameters */,
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
		]],
		[/* constructor */ '<init>(java.io.InputStream)', [
			[/* constructor description */
				[/* text */ 't', `Creates an ObjectInputStream that reads from the specified InputStream.
 A serialization stream header is read from the stream and verified.
 This constructor will block until the corresponding ObjectOutputStream
 has written and flushed the header.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The constructor initializes the deserialization filter to the filter returned
 by invoking the `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `ObjectInputFilter.Config.getSerialFilterFactory()`],
					[/* text */ 't', ` with `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for the current filter
 and the `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilter()`, `static JVM-wide filter`],
					[/* text */ 't', ` for the requested filter.

 `]
				]],
				[/* block */ 'b', `If a security manager is installed, this constructor will check for
 the "enableSubclassImplementation" SerializablePermission when invoked
 directly or indirectly by the constructor of a subclass which overrides
 the ObjectInputStream.readFields or ObjectInputStream.readUnshared
 methods.`]
			],
			[/* parameters */
				[/* parameter */ 'in', [/* parameter description */
					[/* text */ 't', `input stream to read from`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.StreamCorruptedException', [/* throw description */
					[/* text */ 't', `if the stream header is incorrect`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs while reading stream header`]
				]],
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if untrusted subclass illegally overrides
          security-sensitive methods`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `in`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`]
				]]
			]
		]]
	],
	[/* methods */
		[/* method */ 'enableResolveObject(boolean)', [
			[/* method description */
				[/* text */ 't', `Enables the stream to do replacement of objects read from the stream. When
 enabled, the `],
				[/* reference */ 'r', `#resolveObject(java.lang.Object)`, `resolveObject(java.lang.Object)`],
				[/* text */ 't', ` method is called for every object being
 deserialized.

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
 of objects read from the stream.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'enable', [/* parameter description */
					[/* text */ 't', `true for enabling use of `],
					[/* inline code block */ 'i', `resolveObject`],
					[/* text */ 't', ` for
          every object being deserialized`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if a security manager exists and its
          `],
					[/* inline code block */ 'i', `checkPermission`],
					[/* text */ 't', ` method denies enabling the stream
          to do replacement of objects read from the stream.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the previous setting before this method was invoked`]
			]
		]],
		[/* method */ 'readClassDescriptor()', [
			[/* method description */
				[/* text */ 't', `Read a class descriptor from the serialization stream.  This method is
 called when the ObjectInputStream expects a class descriptor as the next
 item in the serialization stream.  Subclasses of ObjectInputStream may
 override this method to read in class descriptors that have been written
 in non-standard formats (by subclasses of ObjectOutputStream which have
 overridden the `],
				[/* inline code block */ 'i', `writeClassDescriptor`],
				[/* text */ 't', ` method).  By default,
 this method reads class descriptors according to the format defined in
 the Object Serialization specification.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `If the Class of a serialized object used
          in the class descriptor representation cannot be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the class descriptor read`]
			]
		]],
		[/* method */ 'resolveClass(java.io.ObjectStreamClass)', [
			[/* method description */
				[/* text */ 't', `Load the local class equivalent of the specified stream class
 description.  Subclasses may implement this method to allow classes to
 be fetched from an alternate source.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The corresponding method in `],
					[/* inline code block */ 'i', `ObjectOutputStream`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `annotateClass`],
					[/* text */ 't', `.  This method will be invoked only once for
 each unique class in the stream.  This method can be implemented by
 subclasses to use an alternate loading mechanism but must return a
 `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object. Once returned, if the class is not an array
 class, its serialVersionUID is compared to the serialVersionUID of the
 serialized class, and if there is a mismatch, the deserialization fails
 and an `],
					[/* reference */ 'r', `java.io.InvalidClassException`, `InvalidClassException`],
					[/* text */ 't', ` is thrown.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method in
 `],
					[/* inline code block */ 'i', `ObjectInputStream`],
					[/* text */ 't', ` returns the result of calling
 `]
				]],
				[/* code block */ 'c', `     Class.forName(desc.getName(), false, loader)
 `],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is the first class loader on the current
 thread's stack (starting from the currently executing method) that is
 neither the `],
				[/* reference */ 'r', `java.lang.ClassLoader#getPlatformClassLoader()`, `platform class loader`],
				[/* text */ 't', ` nor its ancestor; otherwise, `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is the
 `],
				[/* text */ 't', `platform class loader`],
				[/* text */ 't', `. If this call results in a
 `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` and the name of the passed
 `],
				[/* inline code block */ 'i', `ObjectStreamClass`],
				[/* text */ 't', ` instance is the Java language keyword
 for a primitive type or void, then the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object
 representing that primitive type or void will be returned
 (e.g., an `],
				[/* inline code block */ 'i', `ObjectStreamClass`],
				[/* text */ 't', ` with the name
 `],
				[/* inline code block */ 'i', `"int"`],
				[/* text */ 't', ` will be resolved to `],
				[/* inline code block */ 'i', `Integer.TYPE`],
				[/* text */ 't', `).
 Otherwise, the `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` will be thrown to
 the caller of this method.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'desc', [/* parameter description */
					[/* text */ 't', `an instance of class `],
					[/* inline code block */ 'i', `ObjectStreamClass`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `any of the usual Input/Output exceptions.`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if class of a serialized object cannot
          be found.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object corresponding to `],
				[/* inline code block */ 'i', `desc`]
			]
		]],
		[/* method */ 'resolveProxyClass(java.lang.String[])', [
			[/* method description */
				[/* text */ 't', `Returns a proxy class that implements the interfaces named in a proxy
 class descriptor; subclasses may implement this method to read custom
 data from the stream along with the descriptors for dynamic proxy
 classes, allowing them to use an alternate loading mechanism for the
 interfaces and the proxy class.

 `],
				[/* block */ 'b', `This method is called exactly once for each unique proxy class
 descriptor in the stream.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The corresponding method in `],
					[/* inline code block */ 'i', `ObjectOutputStream`],
					[/* text */ 't', ` is
 `],
					[/* inline code block */ 'i', `annotateProxyClass`],
					[/* text */ 't', `.  For a given subclass of
 `],
					[/* inline code block */ 'i', `ObjectInputStream`],
					[/* text */ 't', ` that overrides this method, the
 `],
					[/* inline code block */ 'i', `annotateProxyClass`],
					[/* text */ 't', ` method in the corresponding subclass of
 `],
					[/* inline code block */ 'i', `ObjectOutputStream`],
					[/* text */ 't', ` must write any data or objects read by
 this method.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The default implementation of this method in
 `],
					[/* inline code block */ 'i', `ObjectInputStream`],
					[/* text */ 't', ` returns the result of calling
 `],
					[/* inline code block */ 'i', `Proxy.getProxyClass`],
					[/* text */ 't', ` with the list of `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', `
 objects for the interfaces that are named in the `],
					[/* inline code block */ 'i', `interfaces`],
					[/* text */ 't', `
 parameter.  The `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object for each interface name
 `],
					[/* inline code block */ 'i', `i`],
					[/* text */ 't', ` is the value returned by calling
 `]
				]],
				[/* code block */ 'c', `     Class.forName(i, false, loader)
 `],
				[/* text */ 't', `
 where `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is the first class loader on the current
 thread's stack (starting from the currently executing method) that is
 neither the `],
				[/* reference */ 'r', `java.lang.ClassLoader#getPlatformClassLoader()`, `platform class loader`],
				[/* text */ 't', ` nor its ancestor; otherwise, `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is the
 `],
				[/* text */ 't', `platform class loader`],
				[/* text */ 't', `.
 Unless any of the resolved interfaces are non-public, this same value
 of `],
				[/* inline code block */ 'i', `loader`],
				[/* text */ 't', ` is also the class loader passed to
 `],
				[/* inline code block */ 'i', `Proxy.getProxyClass`],
				[/* text */ 't', `; if non-public interfaces are present,
 their class loader is passed instead (if more than one non-public
 interface class loader is encountered, an
 `],
				[/* inline code block */ 'i', `IllegalAccessError`],
				[/* text */ 't', ` is thrown).
 If `],
				[/* inline code block */ 'i', `Proxy.getProxyClass`],
				[/* text */ 't', ` throws an
 `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `, `],
				[/* inline code block */ 'i', `resolveProxyClass`],
				[/* text */ 't', `
 will throw a `],
				[/* inline code block */ 'i', `ClassNotFoundException`],
				[/* text */ 't', ` containing the
 `],
				[/* inline code block */ 'i', `IllegalArgumentException`],
				[/* text */ 't', `.`],
				[/* block */ 'b', '']
			],
			[/* parameters */
				[/* parameter */ 'interfaces', [/* parameter description */
					[/* text */ 't', `the list of interface names that were
                deserialized in the proxy class descriptor`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `any exception thrown by the underlying
                `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the proxy class or any of the
                named interfaces could not be found`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a proxy class for the specified interfaces`]
			]
		]],
		[/* method */ 'readObjectOverride()', [
			[/* method description */
				[/* text */ 't', `This method is called by trusted subclasses of ObjectInputStream that
 constructed ObjectInputStream using the protected no-arg constructor.
 The subclass is expected to provide an override method with the modifier
 "final".`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `Class definition of a serialized object
          cannot be found.`]
				]],
				[/* throw */ 'java.io.OptionalDataException', [/* throw description */
					[/* text */ 't', `Primitive data was found in the stream
          instead of objects.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if I/O errors occurred while reading from the
          underlying stream`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the Object read from the stream.`]
			]
		]],
		[/* method */ 'resolveObject(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `This method will allow trusted subclasses of ObjectInputStream to
 substitute one object for another during deserialization. Replacing
 objects is disabled until enableResolveObject is called. The
 enableResolveObject method checks that the stream requesting to resolve
 object can be trusted. Every reference to serializable objects is passed
 to resolveObject.  To insure that the private state of objects is not
 unintentionally exposed only trusted streams may use resolveObject.

 `],
				[/* block */ 'b', `This method is called after an object has been read but before it is
 returned from readObject.  The default resolveObject method just returns
 the same object.

 `],
				[/* block */ 'b', `When a subclass is replacing objects it must insure that the
 substituted object is compatible with every field where the reference
 will be stored.  Objects whose type is not a subclass of the type of the
 field or array element abort the deserialization by raising an exception
 and the object is not be stored.

 `],
				[/* block */ 'b', `This method is called only once when each object is first
 encountered.  All subsequent references to the object will be redirected
 to the new object.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `object to be substituted`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any of the usual Input/Output exceptions.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the substituted object`]
			]
		]],
		[/* method */ 'readStreamHeader()', [
			[/* method description */
				[/* text */ 't', `The readStreamHeader method is provided to allow subclasses to read and
 verify their own stream headers. It reads and verifies the magic number
 and version number.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
          underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.io.StreamCorruptedException', [/* throw description */
					[/* text */ 't', `if control information in the stream
          is inconsistent`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readBoolean()', [
			[/* method description */
				[/* text */ 't', `Reads in a boolean.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the boolean read.`]
			]
		]],
		[/* method */ 'readByte()', [
			[/* method description */
				[/* text */ 't', `Reads an 8 bit byte.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 8 bit byte read.`]
			]
		]],
		[/* method */ 'readChar()', [
			[/* method description */
				[/* text */ 't', `Reads a 16 bit char.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 16 bit char read.`]
			]
		]],
		[/* method */ 'readDouble()', [
			[/* method description */
				[/* text */ 't', `Reads a 64 bit double.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 64 bit double read.`]
			]
		]],
		[/* method */ 'getObjectInputFilter()', [
			[/* method description */
				[/* text */ 't', `Returns the deserialization filter for this stream.
 The filter is the result of invoking the
 `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `JVM-wide filter factory`],
				[/* text */ 't', `
 either by the `],
				[/* reference */ 'r', `#%3Cinit%3E()`, `constructor`],
				[/* text */ 't', ` or the most recent invocation of
 `],
				[/* reference */ 'r', `#setObjectInputFilter(java.io.ObjectInputFilter)`, `setObjectInputFilter`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the deserialization filter for the stream; may be null`]
			]
		]],
		[/* method */ 'readObject()', [
			[/* method description */
				[/* text */ 't', `Read an object from the ObjectInputStream.  The class of the object, the
 signature of the class, and the values of the non-transient and
 non-static fields of the class and all of its supertypes are read.
 Default deserializing for a class can be overridden using the writeObject
 and readObject methods.  Objects referenced by this object are read
 transitively so that a complete equivalent graph of objects is
 reconstructed by readObject.

 `],
				[/* block */ 'b', `The root object is completely restored when all of its fields and the
 objects it references are completely restored.  At this point the object
 validation callbacks are executed in order based on their registered
 priorities. The callbacks are registered by objects (in the readObject
 special methods) as they are individually restored.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The deserialization filter, when not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, is invoked for
 each object (regular or class) read to reconstruct the root object.
 See `],
					[/* reference */ 'r', `#setObjectInputFilter(java.io.ObjectInputFilter)`, `setObjectInputFilter`],
					[/* text */ 't', ` for details.

 `]
				]],
				[/* block */ 'b', `Exceptions are thrown for problems with the InputStream and for
 classes that should not be deserialized.  All exceptions are fatal to
 the InputStream and leave it in an indeterminate state; it is up to the
 caller to ignore or recover the stream state.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `Class of a serialized object cannot be
          found.`]
				]],
				[/* throw */ 'java.io.InvalidClassException', [/* throw description */
					[/* text */ 't', `Something is wrong with a class used by
          deserialization.`]
				]],
				[/* throw */ 'java.io.StreamCorruptedException', [/* throw description */
					[/* text */ 't', `Control information in the
          stream is inconsistent.`]
				]],
				[/* throw */ 'java.io.OptionalDataException', [/* throw description */
					[/* text */ 't', `Primitive data was found in the
          stream instead of objects.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `Any of the usual Input/Output related exceptions.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the object read from the stream`]
			]
		]],
		[/* method */ 'setObjectInputFilter(java.io.ObjectInputFilter)', [
			[/* method description */
				[/* text */ 't', `Set the deserialization filter for the stream.

 The deserialization filter is set to the filter returned by invoking the
 `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `JVM-wide filter factory`],
				[/* text */ 't', `
 with the `],
				[/* reference */ 'r', `#getObjectInputFilter()`, `current filter`],
				[/* text */ 't', ` and the `],
				[/* inline code block */ 'i', `filter`],
				[/* text */ 't', ` parameter.
 The current filter was set in the
 `],
				[/* reference */ 'r', `#%3Cinit%3E()`, `ObjectInputStream constructors`],
				[/* text */ 't', ` by invoking the
 `],
				[/* reference */ 'r', `java.io.ObjectInputFilter.Config#getSerialFilterFactory()`, `JVM-wide filter factory`],
				[/* text */ 't', ` and may be `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `.
 `],
				[/* reference */ 'r', `#setObjectInputFilter(java.io.ObjectInputFilter)`, `setObjectInputFilter(ObjectInputFilter)`],
				[/* text */ 't', ` This method} can be called
 once and only once before reading any objects from the stream;
 for example, by calling `],
				[/* reference */ 'r', `#readObject()`, `readObject()`],
				[/* text */ 't', ` or `],
				[/* reference */ 'r', `#readUnshared()`, `readUnshared()`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `It is not permitted to replace a `],
					[/* inline code block */ 'i', `non-null`],
					[/* text */ 't', ` filter with a `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` filter.
 If the `],
					[/* reference */ 'r', `#getObjectInputFilter()`, `current filter`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `non-null`],
					[/* text */ 't', `,
 the value returned from the filter factory must be `],
					[/* inline code block */ 'i', `non-null`],
					[/* text */ 't', `.

 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `The filter's `],
					[/* reference */ 'r', `java.io.ObjectInputFilter#checkInput(java.io.ObjectInputFilter.FilterInfo)`, `checkInput`],
					[/* text */ 't', ` method is called
 for each class and reference in the stream.
 The filter can check any or all of the class, the array length, the number
 of references, the depth of the graph, and the size of the input stream.
 The depth is the number of nested `],
					[/* reference */ 'r', `#readObject()`, `readObject`],
					[/* text */ 't', `
 calls starting with the reading of the root of the graph being deserialized
 and the current object being deserialized.
 The number of references is the cumulative number of objects and references
 to objects already read from the stream including the current object being read.
 The filter is invoked only when reading objects from the stream and not for
 primitives.
 `]
				]],
				[/* block */ 'b', [
					[/* text */ 't', `
 If the filter returns `],
					[/* reference */ 'r', `java.io.ObjectInputFilter.Status#REJECTED`, `Status.REJECTED`],
					[/* text */ 't', `,
 `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` or throws a `],
					[/* reference */ 'r', `java.lang.RuntimeException`, `RuntimeException`],
					[/* text */ 't', `,
 the active `],
					[/* inline code block */ 'i', `readObject`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `readUnshared`],
					[/* text */ 't', `
 throws `],
					[/* reference */ 'r', `java.io.InvalidClassException`, `InvalidClassException`],
					[/* text */ 't', `, otherwise deserialization
 continues uninterrupted.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'filter', [/* parameter description */
					[/* text */ 't', `the filter, may be null`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.SecurityException', [/* throw description */
					[/* text */ 't', `if there is security manager and the
       `],
					[/* inline code block */ 'i', `SerializablePermission("serialFilter")`],
					[/* text */ 't', ` is not granted`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if an object has been read,
       if the filter factory returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` when the
       `],
					[/* reference */ 'r', `#getObjectInputFilter()`, `current filter`],
					[/* text */ 't', ` is non-null, or
       if the filter has already been set.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFloat()', [
			[/* method description */
				[/* text */ 't', `Reads a 32 bit float.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 32 bit float read.`]
			]
		]],
		[/* method */ 'available()', [
			[/* method description */
				[/* text */ 't', `Returns the number of bytes that can be read without blocking.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
          underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the number of available bytes.`]
			]
		]],
		[/* method */ 'read()', [
			[/* method description */
				[/* text */ 't', `Reads a byte of data. This method will block if no input is available.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the byte read, or -1 if the end of the stream is reached.`]
			]
		]],
		[/* method */ 'read(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads into an array of bytes.  This method will block until some input
 is available. Consider using java.io.DataInputStream.readFully to read
 exactly 'length' bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset in the destination array `],
					[/* inline code block */ 'i', `buf`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `buf`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
          `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `buf.length - off`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes read, -1 is returned when the end of
          the stream is reached.`]
			]
		]],
		[/* method */ 'readInt()', [
			[/* method description */
				[/* text */ 't', `Reads a 32 bit int.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 32 bit integer read.`]
			]
		]],
		[/* method */ 'readUnsignedByte()', [
			[/* method description */
				[/* text */ 't', `Reads an unsigned 8 bit byte.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 8 bit byte read.`]
			]
		]],
		[/* method */ 'readUnsignedShort()', [
			[/* method description */
				[/* text */ 't', `Reads an unsigned 16 bit short.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 16 bit short read.`]
			]
		]],
		[/* method */ 'skipBytes(int)', [
			[/* method description */
				[/* text */ 't', `Skips bytes.`]
			],
			[/* parameters */
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the number of bytes to be skipped`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the actual number of bytes skipped.`]
			]
		]],
		[/* method */ 'readFields()', [
			[/* method description */
				[/* text */ 't', `Reads the persistent fields from the stream and makes them available by
 name.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the class of a serialized object
          could not be found.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.io.NotActiveException', [/* throw description */
					[/* text */ 't', `if the stream is not currently reading
          objects.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `GetField`],
				[/* text */ 't', ` object representing the persistent
          fields of the object being deserialized`]
			]
		]],
		[/* method */ 'readUnshared()', [
			[/* method description */
				[/* text */ 't', `Reads an "unshared" object from the ObjectInputStream.  This method is
 identical to readObject, except that it prevents subsequent calls to
 readObject and readUnshared from returning additional references to the
 deserialized instance obtained via this call.  Specifically:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', `If readUnshared is called to deserialize a back-reference (the
       stream representation of an object which has been written
       previously to the stream), an ObjectStreamException will be
       thrown.

   `],
					[/* block */ 'b', `If readUnshared returns successfully, then any subsequent attempts
       to deserialize back-references to the stream handle deserialized
       by readUnshared will cause an ObjectStreamException to be thrown.
 `]
				]],
				[/* text */ 't', `
 Deserializing an object via readUnshared invalidates the stream handle
 associated with the returned object.  Note that this in itself does not
 always guarantee that the reference returned by readUnshared is unique;
 the deserialized object may define a readResolve method which returns an
 object visible to other parties, or readUnshared may return a Class
 object or enum constant obtainable elsewhere in the stream or through
 external means. If the deserialized object defines a readResolve method
 and the invocation of that method returns an array, then readUnshared
 returns a shallow clone of that array; this guarantees that the returned
 array object is unique and cannot be obtained a second time from an
 invocation of readObject or readUnshared on the ObjectInputStream,
 even if the underlying data stream has been manipulated.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The deserialization filter, when not `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `, is invoked for
 each object (regular or class) read to reconstruct the root object.
 See `],
					[/* reference */ 'r', `#setObjectInputFilter(java.io.ObjectInputFilter)`, `setObjectInputFilter`],
					[/* text */ 't', ` for details.

 `]
				]],
				[/* block */ 'b', `ObjectInputStream subclasses which override this method can only be
 constructed in security contexts possessing the
 "enableSubclassImplementation" SerializablePermission; any attempt to
 instantiate such a subclass without this permission will cause a
 SecurityException to be thrown.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if class of an object to deserialize
          cannot be found`]
				]],
				[/* throw */ 'java.io.StreamCorruptedException', [/* throw description */
					[/* text */ 't', `if control information in the stream
          is inconsistent`]
				]],
				[/* throw */ 'java.io.ObjectStreamException', [/* throw description */
					[/* text */ 't', `if object to deserialize has already
          appeared in stream`]
				]],
				[/* throw */ 'java.io.OptionalDataException', [/* throw description */
					[/* text */ 't', `if primitive data is next in stream`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs during deserialization`]
				]]
			],
			[/* return description */
				[/* text */ 't', `reference to deserialized object`]
			]
		]],
		[/* method */ 'readLine()', [
			[/* method description */
				[/* text */ 't', `Reads in a line that has been terminated by a \\n, \\r, \\r\\n or EOF.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
          underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a String copy of the line.`]
			]
		]],
		[/* method */ 'readUTF()', [
			[/* method description */
				[/* text */ 't', `Reads a String in
 `],
				[/* reference */ 'r', `java.io.DataInput#modified-utf-8`, `modified UTF-8`],
				[/* text */ 't', `
 format.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if there are I/O errors while reading from the
          underlying `],
					[/* inline code block */ 'i', `InputStream`]
				]],
				[/* throw */ 'java.io.UTFDataFormatException', [/* throw description */
					[/* text */ 't', `if read bytes do not represent a valid
          modified UTF-8 encoding of a string`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the String.`]
			]
		]],
		[/* method */ 'readLong()', [
			[/* method description */
				[/* text */ 't', `Reads a 64 bit long.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the read 64 bit long.`]
			]
		]],
		[/* method */ 'readShort()', [
			[/* method description */
				[/* text */ 't', `Reads a 16 bit short.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the 16 bit short read.`]
			]
		]],
		[/* method */ 'close()', [
			[/* method description */
				[/* text */ 't', `Closes the input stream. Must be called to release any resources
 associated with the stream.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If an I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'defaultReadObject()', [
			[/* method description */
				[/* text */ 't', `Read the non-static and non-transient fields of the current class from
 this stream.  This may only be called from the readObject method of the
 class being deserialized. It will throw the NotActiveException if it is
 called otherwise.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.lang.ClassNotFoundException', [/* throw description */
					[/* text */ 't', `if the class of a serialized object
          could not be found.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `if an I/O error occurs.`]
				]],
				[/* throw */ 'java.io.NotActiveException', [/* throw description */
					[/* text */ 't', `if the stream is not currently reading
          objects.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFully(byte[])', [
			[/* method description */
				[/* text */ 't', `Reads bytes, blocking until all bytes are read.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `buf`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'readFully(byte[],int,int)', [
			[/* method description */
				[/* text */ 't', `Reads bytes, blocking until all bytes are read.`]
			],
			[/* parameters */
				[/* parameter */ 'buf', [/* parameter description */
					[/* text */ 't', `the buffer into which the data is read`]
				]],
				[/* parameter */ 'off', [/* parameter description */
					[/* text */ 't', `the start offset into the data array `],
					[/* inline code block */ 'i', `buf`]
				]],
				[/* parameter */ 'len', [/* parameter description */
					[/* text */ 't', `the maximum number of bytes to read`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `buf`],
					[/* text */ 't', ` is `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.lang.IndexOutOfBoundsException', [/* throw description */
					[/* text */ 't', `If `],
					[/* inline code block */ 'i', `off`],
					[/* text */ 't', ` is negative,
          `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is negative, or `],
					[/* inline code block */ 'i', `len`],
					[/* text */ 't', ` is greater than
          `],
					[/* inline code block */ 'i', `buf.length - off`],
					[/* text */ 't', `.`]
				]],
				[/* throw */ 'java.io.EOFException', [/* throw description */
					[/* text */ 't', `If end of file is reached.`]
				]],
				[/* throw */ 'java.io.IOException', [/* throw description */
					[/* text */ 't', `If other I/O error has occurred.`]
				]]
			],
			/* return */ UDF
		]],
		[/* method */ 'registerValidation(java.io.ObjectInputValidation,int)', [
			[/* method description */
				[/* text */ 't', `Register an object to be validated before the graph is returned.  While
 similar to resolveObject these validations are called after the entire
 graph has been reconstituted.  Typically, a readObject method will
 register the object with the stream so that when all of the objects are
 restored a final set of validations can be performed.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to receive the validation callback.`]
				]],
				[/* parameter */ 'prio', [/* parameter description */
					[/* text */ 't', `controls the order of callbacks;zero is a good default.
          Use higher numbers to be called back earlier, lower numbers for
          later callbacks. Within a priority, callbacks are processed in
          no particular order.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.io.NotActiveException', [/* throw description */
					[/* text */ 't', `The stream is not currently reading objects
          so it is invalid to register a callback.`]
				]],
				[/* throw */ 'java.io.InvalidObjectException', [/* throw description */
					[/* text */ 't', `The validation object is null.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
