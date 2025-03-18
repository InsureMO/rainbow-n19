import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.ElementType', [
	[/* class description */
		[/* text */ 't', `The constants of this enumerated class provide a simple classification of the
 syntactic locations where annotations may appear in a Java program. These
 constants are used in `],
		[/* reference */ 'r', `annotation interface in java.lang.annotation.Target`, `Target`],
		[/* text */ 't', `
 meta-annotations to specify where it is legal to write annotations of a
 given type.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `The syntactic locations where annotations may appear are split into
 `],
			[/* text */ 't', `declaration contexts`],
			[/* text */ 't', `, where annotations apply to declarations, and
 `],
			[/* text */ 't', `type contexts`],
			[/* text */ 't', `, where annotations apply to types used in
 declarations and expressions.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The constants `],
			[/* text */ 't', `ANNOTATION_TYPE`],
			[/* text */ 't', `, `],
			[/* text */ 't', `CONSTRUCTOR`],
			[/* text */ 't', `, `],
			[/* text */ 't', `FIELD`],
			[/* text */ 't', `, `],
			[/* text */ 't', `LOCAL_VARIABLE`],
			[/* text */ 't', `, `],
			[/* text */ 't', `METHOD`],
			[/* text */ 't', `, `],
			[/* text */ 't', `PACKAGE`],
			[/* text */ 't', `, `],
			[/* text */ 't', `MODULE`],
			[/* text */ 't', `, `],
			[/* text */ 't', `PARAMETER`],
			[/* text */ 't', `, `],
			[/* text */ 't', `TYPE`],
			[/* text */ 't', `, and `],
			[/* text */ 't', `TYPE_PARAMETER`],
			[/* text */ 't', `
 correspond to the declaration contexts in JLS 9.6.4.1.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, an annotation whose interface is meta-annotated with
 `],
			[/* inline code block */ 'i', `@Target(ElementType.FIELD)`],
			[/* text */ 't', ` may only be written as a modifier for a
 field declaration.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The constant `],
			[/* text */ 't', `TYPE_USE`],
			[/* text */ 't', ` corresponds to the type contexts in JLS
 4.11, as well as to two declaration contexts: class and interface
 declarations (including annotation declarations) and type parameter
 declarations.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `For example, an annotation whose interface is meta-annotated with
 `],
			[/* inline code block */ 'i', `@Target(ElementType.TYPE_USE)`],
			[/* text */ 't', ` may be written on the class or
 interface of a field (or within the class or interface of the field, if it
 is a nested or parameterized class or interface, or array class), and may
 also appear as a modifier for, say, a class declaration.

 `]
		]],
		[/* block */ 'b', [
			[/* text */ 't', `The `],
			[/* inline code block */ 'i', `TYPE_USE`],
			[/* text */ 't', ` constant includes class and interface declarations
 and type parameter declarations as a convenience for designers of
 type checkers which give semantics to annotation interfaces. For example,
 if the annotation interface `],
			[/* inline code block */ 'i', `NonNull`],
			[/* text */ 't', ` is meta-annotated with
 `],
			[/* inline code block */ 'i', `@Target(ElementType.TYPE_USE)`],
			[/* text */ 't', `, then `],
			[/* inline code block */ 'i', `@NonNull`],
			[/* text */ 't', `
 `],
			[/* inline code block */ 'i', `class C {...}`],
			[/* text */ 't', ` could be treated by a type checker as indicating that
 all variables of class `],
			[/* inline code block */ 'i', `C`],
			[/* text */ 't', ` are non-null, while still allowing
 variables of other classes to be non-null or not non-null based on whether
 `],
			[/* inline code block */ 'i', `@NonNull`],
			[/* text */ 't', ` appears at the variable's declaration.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'valueOf(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns the enum constant of this class with the specified name.
The string must match `],
				[/* text */ 't', `exactly`],
				[/* text */ 't', ` an identifier used to declare an
enum constant in this class.  (Extraneous whitespace characters are 
not permitted.)`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the name of the enum constant to be returned.`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if this enum class has no constant with the specified name`]
				]],
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is null`]
				]]
			],
			[/* return description */
				[/* text */ 't', `the enum constant with the specified name`]
			]
		]],
		[/* method */ 'values()', [
			[/* method description */
				[/* text */ 't', `Returns an array containing the constants of this enum class, in
the order they are declared.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `an array containing the constants of this enum class, in the order they are declared`]
			]
		]]
	],
	[/* enum values */
		[/* enum value */ 'TYPE', [
			[/* enum value description */
				[/* text */ 't', `Class, interface (including annotation interface), enum, or record
 declaration`]
			],
		]],
		[/* enum value */ 'FIELD', [
			[/* enum value description */
				[/* text */ 't', `Field declaration (includes enum constants)`]
			],
		]],
		[/* enum value */ 'METHOD', [
			[/* enum value description */
				[/* text */ 't', `Method declaration`]
			],
		]],
		[/* enum value */ 'PARAMETER', [
			[/* enum value description */
				[/* text */ 't', `Formal parameter declaration`]
			],
		]],
		[/* enum value */ 'CONSTRUCTOR', [
			[/* enum value description */
				[/* text */ 't', `Constructor declaration`]
			],
		]],
		[/* enum value */ 'LOCAL_VARIABLE', [
			[/* enum value description */
				[/* text */ 't', `Local variable declaration`]
			],
		]],
		[/* enum value */ 'ANNOTATION_TYPE', [
			[/* enum value description */
				[/* text */ 't', `Annotation interface declaration (Formerly known as an annotation type.)`]
			],
		]],
		[/* enum value */ 'PACKAGE', [
			[/* enum value description */
				[/* text */ 't', `Package declaration`]
			],
		]],
		[/* enum value */ 'TYPE_PARAMETER', [
			[/* enum value description */
				[/* text */ 't', `Type parameter declaration`]
			],
		]],
		[/* enum value */ 'TYPE_USE', [
			[/* enum value description */
				[/* text */ 't', `Use of a type`]
			],
		]],
		[/* enum value */ 'MODULE', [
			[/* enum value description */
				[/* text */ 't', `Module declaration.`]
			],
		]],
		[/* enum value */ 'RECORD_COMPONENT', [
			[/* enum value description */
				[/* text */ 't', `Record component`]
			],
		]]
	],
]);
