import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.lang.Enum', [
	[/* class description */
		[/* text */ 't', `This is the common base class of all Java language enumeration classes.

 More information about enums, including descriptions of the
 implicitly declared methods synthesized by the compiler, can be
 found in section `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-8.html#jls-8.9`, `8.9`],
		[/* text */ 't', ` of `],
		[/* text */ 't', `The Java Language
 Specification`],
		[/* text */ 't', `.

 Enumeration classes are all serializable and receive special handling
 by the serialization mechanism. The serialized representation used
 for enum constants cannot be customized. Declarations of methods
 and fields that would otherwise interact with serialization are
 ignored, including `],
		[/* inline code block */ 'i', `serialVersionUID`],
		[/* text */ 't', `; see the `],
		[/* text */ 't', `Java
 Object Serialization Specification`],
		[/* text */ 't', ` for details.

 `],
		[/* block */ 'b', [
			[/* text */ 't', ` Note that when using an enumeration type as the type of a set
 or as the type of the keys in a map, specialized and efficient
 `],
			[/* reference */ 'r', `java.util.EnumSet`, `set`],
			[/* text */ 't', ` and `],
			[/* reference */ 'r', `java.util.EnumMap`, `map`],
			[/* text */ 't', ` implementations are available.`]
		]]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,int)', [
			[/* constructor description */
				[/* text */ 't', `Sole constructor.  Programmers cannot invoke this constructor.
 It is for use by code emitted by the compiler in response to
 enum class declarations.`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `- The name of this enum constant, which is the identifier
               used to declare it.`]
				]],
				[/* parameter */ 'ordinal', [/* parameter description */
					[/* text */ 't', `- The ordinal of this enumeration constant (its position
         in the enum declaration, where the initial constant is assigned
         an ordinal of zero).`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'clone()', [
			[/* method description */
				[/* text */ 't', `Throws CloneNotSupportedException.  This guarantees that enums
 are never cloned, which is necessary to preserve their "singleton"
 status.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.CloneNotSupportedException', [/* throw description */
					[/* text */ 't', `if the object's class does not
               support the `],
					[/* inline code block */ 'i', `Cloneable`],
					[/* text */ 't', ` interface. Subclasses
               that override the `],
					[/* inline code block */ 'i', `clone`],
					[/* text */ 't', ` method can also
               throw this exception to indicate that an instance cannot
               be cloned.`]
				]]
			],
			[/* return description */
				[/* text */ 't', `(never returns)`]
			]
		]],
		[/* method */ 'finalize()', [
			[/* method description */
				[/* text */ 't', `enum classes cannot have finalize methods.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			/* return */ UDF
		]],
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified object is equal to this
 enum constant.`]
			],
			[/* parameters */
				[/* parameter */ 'other', [/* parameter description */
					[/* text */ 't', `the object to be compared for equality with this object.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified object is equal to this
          enum constant.`]
			]
		]],
		[/* method */ 'compareTo(java.lang.Enum)', [
			[/* method description */
				[/* text */ 't', `Compares this enum with the specified object for order.  Returns a
 negative integer, zero, or a positive integer as this object is less
 than, equal to, or greater than the specified object.

 Enum constants are only comparable to other enum constants of the
 same enum type.  The natural order implemented by this
 method is the order in which the constants are declared.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the object to be compared.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a negative integer, zero, or a positive integer as this object
          is less than, equal to, or greater than the specified object.`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns a hash code for this enum constant.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a hash code for this enum constant.`]
			]
		]],
		[/* method */ 'ordinal()', [
			[/* method description */
				[/* text */ 't', `Returns the ordinal of this enumeration constant (its position
 in its enum declaration, where the initial constant is assigned
 an ordinal of zero).

 Most programmers will have no use for this method.  It is
 designed for use by sophisticated enum-based data structures, such
 as `],
				[/* reference */ 'r', `java.util.EnumSet`, `EnumSet`],
				[/* text */ 't', ` and `],
				[/* reference */ 'r', `java.util.EnumMap`, `EnumMap`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the ordinal of this enumeration constant`]
			]
		]],
		[/* method */ 'getDeclaringClass()', [
			[/* method description */
				[/* text */ 't', `Returns the Class object corresponding to this enum constant's
 enum type.  Two enum constants e1 and  e2 are of the
 same enum type if and only if
   e1.getDeclaringClass() == e2.getDeclaringClass().
 (The value returned by this method may differ from the one returned
 by the `],
				[/* reference */ 'r', `java.lang.Object#getClass()`, `Object.getClass()`],
				[/* text */ 't', ` method for enum constants with
 constant-specific class bodies.)`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the Class object corresponding to this enum constant's
     enum type`]
			]
		]],
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this enum constant, exactly as declared in its
 enum declaration.

 `],
				[/* reference */ 'r', `#toString()`, `toString()`],
				[/* text */ 't', `  This method is designed primarily for
 use in specialized situations where correctness depends on getting the
 exact name, which will not vary from release to release.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this enum constant`]
			]
		]],
		[/* method */ 'describeConstable()', [
			[/* method description */
				[/* text */ 't', `Returns an enum descriptor `],
				[/* inline code block */ 'i', `EnumDesc`],
				[/* text */ 't', ` for this instance, if one can be
 constructed, or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `An `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` containing the resulting nominal descriptor,
 or an empty `],
				[/* reference */ 'r', `java.util.Optional`, `Optional`],
				[/* text */ 't', ` if one cannot be constructed.`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns the name of this enum constant, as contained in the
 declaration.  This method may be overridden, though it typically
 isn't necessary or desirable.  An enum class should override this
 method when a more "programmer-friendly" string form exists.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of this enum constant`]
			]
		]],
		[/* method */ 'valueOf(java.lang.Class,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of the specified enum class with the
 specified name.  The name must match exactly an identifier used
 to declare an enum constant in this class.  (Extraneous whitespace
 characters are not permitted.)

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Note that for a particular enum class `],
					[/* inline code block */ 'i', `T`],
					[/* text */ 't', `, the
 implicitly declared `],
					[/* inline code block */ 'i', `public static T valueOf(String)`],
					[/* text */ 't', `
 method on that enum may be used instead of this method to map
 from a name to the corresponding enum constant.  All the
 constants of an enum class can be obtained by calling the
 implicit `],
					[/* inline code block */ 'i', `public static T[] values()`],
					[/* text */ 't', ` method of that
 class.`]
				]]
			],
			[/* parameters */
				[/* parameter */ 'enumClass', [/* parameter description */
					[/* text */ 't', `the `],
					[/* inline code block */ 'i', `Class`],
					[/* text */ 't', ` object of the enum class from which
      to return a constant`]
				]],
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the constant to return`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the specified enum class has
         no constant with the specified name, or the specified
         class object does not represent an enum class`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if `],
					[/* inline code block */ 'i', `enumClass`],
					[/* text */ 't', ` or `],
					[/* inline code block */ 'i', `name`],
					[/* text */ 't', `
         is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant of the specified enum class with the
      specified name`]
			]
		]]
	],
]);
