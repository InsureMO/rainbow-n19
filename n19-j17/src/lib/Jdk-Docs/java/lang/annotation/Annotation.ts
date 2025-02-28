import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.annotation.Annotation', [
	[/* class description */
		[/* text */ 't', `The common interface extended by all annotation interfaces.  Note that an
 interface that manually extends this one does `],
		[/* text */ 't', `not`],
		[/* text */ 't', ` define
 an annotation interface.  Also note that this interface does not itself
 define an annotation interface.

 More information about annotation interfaces can be found in section
 `],
		[/* external link */ 'a', `https://docs.oracle.com/javase/specs/jls/se17/html/jls-9.html#jls-9.6`, `9.6`],
		[/* text */ 't', ` of `],
		[/* text */ 't', `The Java Language Specification`],
		[/* text */ 't', `.

 The `],
		[/* reference */ 'r', `java.lang.reflect.AnnotatedElement`],
		[/* text */ 't', ` interface discusses
 compatibility concerns when evolving an annotation interface from being
 non-repeatable to being repeatable.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Returns true if the specified object represents an annotation
 that is logically equivalent to this one.  In other words,
 returns true if the specified object is an instance of the same
 annotation interface as this instance, all of whose members are equal
 to the corresponding member of this annotation, as defined below:
 `],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `Two corresponding primitive typed members whose values are
    `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', ` are considered equal if `],
						[/* inline code block */ 'i', `x == y`],
						[/* text */ 't', `,
    unless their type is `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', ` or `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', `.

    `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two corresponding `],
						[/* inline code block */ 'i', `float`],
						[/* text */ 't', ` members whose values
    are `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', ` are considered equal if
    `],
						[/* inline code block */ 'i', `Float.valueOf(x).equals(Float.valueOf(y))`],
						[/* text */ 't', `.
    (Unlike the `],
						[/* inline code block */ 'i', `==`],
						[/* text */ 't', ` operator, NaN is considered equal
    to itself, and `],
						[/* inline code block */ 'i', `0.0f`],
						[/* text */ 't', ` unequal to `],
						[/* inline code block */ 'i', `-0.0f`],
						[/* text */ 't', `.)

    `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two corresponding `],
						[/* inline code block */ 'i', `double`],
						[/* text */ 't', ` members whose values
    are `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', ` are considered equal if
    `],
						[/* inline code block */ 'i', `Double.valueOf(x).equals(Double.valueOf(y))`],
						[/* text */ 't', `.
    (Unlike the `],
						[/* inline code block */ 'i', `==`],
						[/* text */ 't', ` operator, NaN is considered equal
    to itself, and `],
						[/* inline code block */ 'i', `0.0`],
						[/* text */ 't', ` unequal to `],
						[/* inline code block */ 'i', `-0.0`],
						[/* text */ 't', `.)

    `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two corresponding `],
						[/* inline code block */ 'i', `String`],
						[/* text */ 't', `, `],
						[/* inline code block */ 'i', `Class`],
						[/* text */ 't', `, enum, or
    annotation typed members whose values are `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', `
    are considered equal if `],
						[/* inline code block */ 'i', `x.equals(y)`],
						[/* text */ 't', `.  (Note that this
    definition is recursive for annotation typed members.)

    `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `Two corresponding array typed members `],
						[/* inline code block */ 'i', `x`],
						[/* text */ 't', ` and `],
						[/* inline code block */ 'i', `y`],
						[/* text */ 't', `
    are considered equal if `],
						[/* inline code block */ 'i', `Arrays.equals(x, y)`],
						[/* text */ 't', `, for the
    appropriate overloading of `],
						[/* external link */ 'a', `../../util/Arrays.html#equals(long%5B%5D,long%5B%5D)`, `Arrays.equals`],
						[/* text */ 't', `.
 `]
					]]
				]]
			],
			[/* parameters */
				[/* parameter */ 'obj', [/* parameter description */
					[/* text */ 't', `the reference object with which to compare.`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `true if the specified object represents an annotation
     that is logically equivalent to this one, otherwise false`]
			]
		]],
		[/* method */ 'toString()', [
			[/* method description */
				[/* text */ 't', `Returns a string representation of this annotation.  The details
 of the representation are implementation-dependent, but the following
 may be regarded as typical:
 `],
				[/* code block */ 'c', `   @com.example.Name(first="Duke", middle="of", last="Java")
 `]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a string representation of this annotation`]
			]
		]],
		[/* method */ 'hashCode()', [
			[/* method description */
				[/* text */ 't', `Returns the hash code of this annotation.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `The hash code of an annotation is the sum of the hash codes
 of its members (including those with default values).

 The hash code of an annotation member is (127 times the hash code
 of the member-name as computed by `],
					[/* external link */ 'a', `../String.html#hashCode()`, `String.hashCode()`],
					[/* text */ 't', `) XOR
 the hash code of the member-value.
 The hash code of a member-value depends on its type as defined below:
 `]
				]],
				[/* list */ 'l', [
					[/* block */ 'b', [
						[/* text */ 't', `The hash code of a primitive value `],
						[/* inline code block */ 'i', `v`],
						[/* text */ 't', ` is equal to
     `],
						[/* inline code block */ 'i', `WrapperType.valueOf(v).hashCode()`],
						[/* text */ 't', `, where
     `],
						[/* inline code block */ 'i', `WrapperType`],
						[/* text */ 't', ` is the wrapper type corresponding
     to the primitive type of `],
						[/* inline code block */ 'i', `v`],
						[/* text */ 't', ` (`],
						[/* reference */ 'r', `java.lang.Byte`],
						[/* text */ 't', `,
     `],
						[/* reference */ 'r', `java.lang.Character`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Double`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Float`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Integer`],
						[/* text */ 't', `,
     `],
						[/* reference */ 'r', `java.lang.Long`],
						[/* text */ 't', `, `],
						[/* reference */ 'r', `java.lang.Short`],
						[/* text */ 't', `, or `],
						[/* reference */ 'r', `java.lang.Boolean`],
						[/* text */ 't', `).

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The hash code of a string, enum, class, or annotation member-value
     `],
						[/* inline code block */ 'i', `v`],
						[/* text */ 't', ` is computed as by calling
     `],
						[/* inline code block */ 'i', `v.hashCode()`],
						[/* text */ 't', `.  (In the case of annotation
     member values, this is a recursive definition.)

 `]
					]],
					[/* block */ 'b', [
						[/* text */ 't', `The hash code of an array member-value is computed by calling
     the appropriate overloading of
     `],
						[/* external link */ 'a', `../../util/Arrays.html#hashCode(long%5B%5D)`, `Arrays.hashCode`],
						[/* text */ 't', `
     on the value.  (There is one overloading for each primitive
     type, and one for object reference types.)
 `]
					]]
				]],
				[/* block */ 'b', '']
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the hash code of this annotation`]
			]
		]],
		[/* method */ 'annotationType()', [
			[/* method description */
				[/* text */ 't', `Returns the annotation interface of this annotation.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the annotation interface of this annotation`]
			]
		]]
	],
]);
