import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.constant.ClassDesc', [
	[/* class description */
		[/* text */ 't', `A `],
		[/* reference */ 'r', `.package-summary#nominal`],
		[/* text */ 't', ` for a
 `],
		[/* reference */ 'r', `java.lang.Class`],
		[/* text */ 't', ` constant.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `For common system types, including all the primitive types, there are
 predefined `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`],
			[/* text */ 't', ` constants in `],
			[/* reference */ 'r', `java.lang.constant.ConstantDescs`],
			[/* text */ 't', `.
 (The `],
			[/* inline code block */ 'i', `java.lang.constant`],
			[/* text */ 't', ` APIs consider `],
			[/* inline code block */ 'i', `void`],
			[/* text */ 't', ` to be a primitive type.)
 To create a `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`],
			[/* text */ 't', ` for a class or interface type, use `],
			[/* reference */ 'r', `#of(java.lang.String)`, `of(java.lang.String)`],
			[/* text */ 't', ` or
 `],
			[/* reference */ 'r', `#ofDescriptor(java.lang.String)`, `ofDescriptor(String)`],
			[/* text */ 't', `; to create a `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`],
			[/* text */ 't', ` for an array
 type, use `],
			[/* reference */ 'r', `#ofDescriptor(java.lang.String)`, `ofDescriptor(String)`],
			[/* text */ 't', `, or first obtain a
 `],
			[/* reference */ 'r', `java.lang.constant.ClassDesc`],
			[/* text */ 't', ` for the component type and then call the `],
			[/* reference */ 'r', `#arrayType()`, `arrayType()`],
			[/* text */ 't', `
 or `],
			[/* reference */ 'r', `#arrayType(int)`, `arrayType(int)`],
			[/* text */ 't', ` methods.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'equals(java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Compare the specified object with this descriptor for equality.  Returns
 `],
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if and only if the specified object is also a
 `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` and both describe the same type.`]
			],
			[/* parameters */
				[/* parameter */ 'o', [/* parameter description */
					[/* text */ 't', `the other object`]
				]]
			],
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether this descriptor is equal to the other object`]
			]
		]],
		[/* method */ 'descriptorString()', [
			[/* method description */
				[/* text */ 't', `Returns a field type descriptor string for this type`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the descriptor string`]
			]
		]],
		[/* method */ 'isArray()', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes an array type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes an array type`]
			]
		]],
		[/* method */ 'isClassOrInterface()', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes a class or interface type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes a class or interface type`]
			]
		]],
		[/* method */ 'isPrimitive()', [
			[/* method description */
				[/* text */ 't', `Returns whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes a primitive type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `whether this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describes a primitive type`]
			]
		]],
		[/* method */ 'arrayType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for an array type whose component type
 is described by this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if the resulting `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` would have an array rank of greater than 255`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the array type`]
			]
		]],
		[/* method */ 'arrayType(int)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for an array type of the specified rank,
 whose component type is described by this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'rank', [/* parameter description */
					[/* text */ 't', `the rank of the array`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the rank is less than or equal to zero or if the rank of the resulting array type is
 greater than 255`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the array type`]
			]
		]],
		[/* method */ 'componentType()', [
			[/* method description */
				[/* text */ 't', `Returns the component type of this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `, if it describes
 an array type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` otherwise.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the component type, or `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', `
 if this descriptor does not describe an array type`]
			]
		]],
		[/* method */ 'nested(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for a nested class of the class or
 interface type described by this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'nestedName', [/* parameter description */
					[/* text */ 't', `the unqualified name of the nested class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` does not
 describe a class or interface type`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the nested class name is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the nested class`]
			]
		]],
		[/* method */ 'nested(java.lang.String,java.lang.String...)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for a nested class of the class or
 interface type described by this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `.`]
			],
			[/* parameters */
				[/* parameter */ 'firstNestedName', [/* parameter description */
					[/* text */ 't', `the unqualified name of the first level of nested class`]
				]],
				[/* parameter */ 'moreNestedNames', [/* parameter description */
					[/* text */ 't', `the unqualified name(s) of the remaining levels of
                       nested class`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument or its contents is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalStateException', [/* throw description */
					[/* text */ 't', `if this `],
					[/* reference */ 'r', `java.lang.constant.ClassDesc`],
					[/* text */ 't', ` does not
 describe a class or interface type`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the nested class name is invalid`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the nested class`]
			]
		]],
		[/* method */ 'displayName()', [
			[/* method description */
				[/* text */ 't', `Returns a human-readable name for the type described by this descriptor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the human-readable name`]
			]
		]],
		[/* method */ 'packageName()', [
			[/* method description */
				[/* text */ 't', `Returns the package name of this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', `, if it describes
 a class or interface type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the package name, or the empty string if the class is in the
 default package, or this `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` does not describe a class or interface type`]
			]
		]],
		[/* method */ 'of(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for a class or interface type,
 given the name of the class or interface, such as `],
				[/* inline code block */ 'i', `"java.lang.String"`],
				[/* text */ 't', `.
 (To create a descriptor for an array type, either use `],
				[/* reference */ 'r', `#ofDescriptor(java.lang.String)`, `ofDescriptor(String)`],
				[/* text */ 't', `
 or `],
				[/* reference */ 'r', `#arrayType()`, `arrayType()`],
				[/* text */ 't', `; to create a descriptor for a primitive type, use
 `],
				[/* reference */ 'r', `#ofDescriptor(java.lang.String)`, `ofDescriptor(String)`],
				[/* text */ 't', ` or use the predefined constants in
 `],
				[/* reference */ 'r', `java.lang.constant.ConstantDescs`],
				[/* text */ 't', `).`]
			],
			[/* parameters */
				[/* parameter */ 'name', [/* parameter description */
					[/* text */ 't', `the fully qualified (dot-separated) binary class name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the name string is not in the
 correct format`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the desired class`]
			]
		]],
		[/* method */ 'of(java.lang.String,java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` for a class or interface type,
 given a package name and the unqualified (simple) name for the
 class or interface.`]
			],
			[/* parameters */
				[/* parameter */ 'packageName', [/* parameter description */
					[/* text */ 't', `the package name (dot-separated); if the package
                    name is the empty string, the class is considered to
                    be in the unnamed package`]
				]],
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `the unqualified (simple) class name`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if any argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the package name or class name are
 not in the correct format`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the desired class`]
			]
		]],
		[/* method */ 'ofDescriptor(java.lang.String)', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` given a descriptor string for a class,
 interface, array, or primitive type.`]
			],
			[/* parameters */
				[/* parameter */ 'descriptor', [/* parameter description */
					[/* text */ 't', `a field descriptor string`]
				]]
			],
			[/* throws */
				[/* throw */ 'java.lang.NullPointerException', [/* throw description */
					[/* text */ 't', `if the argument is `],
					[/* inline code block */ 'i', `null`]
				]],
				[/* throw */ 'java.lang.IllegalArgumentException', [/* throw description */
					[/* text */ 't', `if the name string is not in the
 correct format`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* reference */ 'r', `java.lang.constant.ClassDesc`],
				[/* text */ 't', ` describing the desired class`]
			]
		]]
	],
]);
