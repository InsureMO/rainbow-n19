import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectStreamField', [
	[/* class description */
		[/* text */ 't', `A description of a Serializable field from a Serializable class.  An array
 of ObjectStreamFields is used to declare the Serializable fields of a class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.Class)', [
			[/* constructor description */
				[/* text */ 't', `Create a Serializable field with the specified type.  This field should
 be documented with a `],
				[/* inline code block */ 'i', `serialField`],
				[/* text */ 't', ` tag.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the serializable field`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object of the serializable field`]
				]]
			],
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String,java.lang.Class,boolean)', [
			[/* constructor description */
				[/* text */ 't', `Creates an ObjectStreamField representing a serializable field with the
 given name and type.  If unshared is false, values of the represented
 field are serialized and deserialized in the default manner--if the
 field is non-primitive, object values are serialized and deserialized as
 if they had been written and read by calls to writeObject and
 readObject.  If unshared is true, values of the represented field are
 serialized and deserialized as if they had been written and read by
 calls to writeUnshared and readUnshared.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `field name`]
				]],
				[/* parameter */ 'type', [/* parameter description */
					[/* text */ 't', `field type`]
				]],
				[/* parameter */ 'unshared', [/* parameter description */
					[/* text */ 't', `if false, write/read field values in the same manner
          as writeObject/readObject; if true, write/read in the same
          manner as writeUnshared/readUnshared`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'setOffset(int)', [
			[/* method description */
				[/* text */ 't', `Offset within instance data.`]
			],
			[/* parameters */
				[/* parameter */ 'offset', [/* parameter description */
					[/* text */ 't', `the offset of the field`]
				]]
			],
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'isPrimitive()', [
			[/* method description */
				[/* text */ 't', `Return true if this field has a primitive type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if and only if this field corresponds to a primitive type`]
			]
		]],
		[/* method */ 'isUnshared()', [
			[/* method description */
				[/* text */ 't', `Returns boolean value indicating whether or not the serializable field
 represented by this ObjectStreamField instance is unshared.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if this field is unshared`]
			]
		]],
		[/* method */ 'getTypeCode()', [
			[/* method description */
				[/* text */ 't', `Returns character encoding of field type.  The encoding is as follows:
 `],
				[/* block */ 'b', [
					[/* code block */ 'c', ` B            byte
 C            char
 D            double
 F            float
 I            int
 J            long
 L            class or interface
 S            short
 Z            boolean
 [            array
 `]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the typecode of the serializable field`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compare this field with another `],
				[/* inline code block */ 'i', `ObjectStreamField`],
				[/* text */ 't', `.  Return
 -1 if this is smaller, 0 if equal, 1 if greater.  Types that are
 primitives are "smaller" than object types.  If equal, the field names
 are compared.`]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the object to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as this object
          is less than, equal to, or greater than the specified object.`]
			]
		]],
		[/* method */ 'getOffset()', [
			[/* method description */
				[/* text */ 't', `Offset of field within instance data.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the offset of this field`]
			]
		]],
		[/* method */ 'getType()', [
			[/* method description */
				[/* text */ 't', `Get the type of the field.  If the type is non-primitive and this
 `],
				[/* inline code block */ 'i', `ObjectStreamField`],
				[/* text */ 't', ` was obtained from a deserialized `],
				[/* reference */ 'r', `java.io.ObjectStreamClass`],
				[/* text */ 't', ` instance, then `],
				[/* inline code block */ 'i', `Object.class`],
				[/* text */ 't', ` is returned.
 Otherwise, the `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object for the type of the field is
 returned.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Class`],
				[/* text */ 't', ` object representing the type of the
          serializable field`]
			]
		]],
		[/* method */ 'getName()', [
			[/* method description */
				[/* text */ 't', `Get the name of this field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `String`],
				[/* text */ 't', ` representing the name of the serializable
          field`]
			]
		]],
		[/* method */ 'getTypeString()', [
			[/* method description */
				[/* text */ 't', `Return the JVM type signature.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `null if this field has a primitive type.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Return a string that describes this field.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of the object.`]
			]
		]]
	],
]);
