import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectStreamClass', [
	[/* class description */
		[/* text */ 't', `Serialization's descriptor for classes.  It contains the name and
 serialVersionUID of the class.  The ObjectStreamClass for a specific class
 loaded in this Java VM can be found/created using the lookup method.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The algorithm to compute the SerialVersionUID is described in
 `],
			[/* external link */ 'a', `../../../../specs/serialization/class.html#stream-unique-identifiers`, `Java Object Serialization Specification, Section 4.6, "Stream Unique Identifiers"`],
			[/* text */ 't', `.`]
		]]
	],
	[/* fields */
		[/* field */ 'NO_FIELDS', [
			[/* field description */
				[/* text */ 't', `serialPersistentFields value indicating no serializable fields`]
			],
		]]
	],
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the class described by this descriptor.
 This method returns the name of the class in the format that
 is used by the `],
				[/* external link */ 'a', `../lang/Class.html#getName()`, `Class.getName()`],
				[/* text */ 't', ` method.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representing the name of the class`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a string describing this ObjectStreamClass.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]],
		[/* method */ 'lookup(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Find the descriptor for a class that can be serialized.  Creates an
 ObjectStreamClass instance if one does not exist yet for class. Null is
 returned if the specified class does not implement java.io.Serializable
 or java.io.Externalizable.`]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `class for which to get the descriptor`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the class descriptor for the specified class`]
			]
		]],
		[/* method */ 'getFields()', [
			[/* method description */
				[/* text */ 't', `Return an array of the fields of this serializable class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `an array containing an element for each persistent field of
          this class. Returns an array of length zero if there are no
          fields.`]
			]
		]],
		[/* method */ 'getField(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Get the field of this class by name.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the data field to look for`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `The ObjectStreamField object of the named field or null if
          there is no such named field.`]
			]
		]],
		[/* method */ 'forClass()', [
			[/* method description */
				[/* text */ 't', `Return the class in the local VM that this version is mapped to.  Null
 is returned if there is no corresponding local class.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` instance that this descriptor represents`]
			]
		]],
		[/* method */ 'getSerialVersionUID()', [
			[/* method description */
				[/* text */ 't', `Return the serialVersionUID for this class.  The serialVersionUID
 defines a set of classes all with the same name that have evolved from a
 common root class and agree to be serialized and deserialized using a
 common format.  NonSerializable classes have a serialVersionUID of 0L.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the SUID of the class described by this descriptor`]
			]
		]],
		[/* method */ 'lookupAny(java.lang.Class)', [
			[/* method description */
				[/* text */ 't', `Returns the descriptor for any class, regardless of whether it
 implements `],
				[/* reference */ 'r', `java.io.Serializable`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'cl', [/* parameter description */
					[/* text */ 't', `class for which to get the descriptor`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the class descriptor for the specified class`]
			]
		]]
	],
]);
