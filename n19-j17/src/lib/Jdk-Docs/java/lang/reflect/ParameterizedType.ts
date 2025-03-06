import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.ParameterizedType', [
	[/* class description */
		[/* text */ 't', `ParameterizedType represents a parameterized type such as
 `],
		[/* inline code block */ 'i', `Collection<String>`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `A parameterized type is created the first time it is needed by a
 reflective method, as specified in this package. When a
 parameterized type p is created, the generic class or interface declaration
 that p instantiates is resolved, and all type arguments of p are created
 recursively. See `],
			[/* reference */ 'r', `java.lang.reflect.TypeVariable`, `TypeVariable`],
			[/* text */ 't', ` for details on the creation process for type
 variables. Repeated creation of a parameterized type has no effect.

 `]
		]],
		[/* block */ 'b', `Instances of classes that implement this interface must implement
 an equals() method that equates any two instances that share the
 same generic class or interface declaration and have equal type parameters.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getOwnerType()', [
			[/* method description */
				[/* text */ 't', `Returns a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the type that this type
 is a member of.  For example, if this type is `],
				[/* inline code block */ 'i', `O<T>.I<S>`],
				[/* text */ 't', `,
 return a representation of `],
				[/* inline code block */ 'i', `O<T>`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `If this type is a top-level type, `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` is returned.`]
				]]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if the owner type
     refers to a non-existent class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if the owner type
     refers to a parameterized type that cannot be instantiated
     for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `a `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the type that
     this type is a member of. If this type is a top-level type,
     `],
				[/* inline code block */ 'i', `null`],
				[/* text */ 't', ` is returned`]
			]
		]],
		[/* method */ 'getRawType()', [
			[/* method description */
				[/* text */ 't', `Returns the `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the class or interface
 that declared this type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` object representing the class or interface
     that declared this type`]
			]
		]],
		[/* method */ 'getActualTypeArguments()', [
			[/* method description */
				[/* text */ 't', `Returns an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects representing the actual type
 arguments to this type.

 `],
				[/* block */ 'b', `Note that in some cases, the returned array be empty. This can occur
 if this type represents a non-parameterized type nested within
 a parameterized type.`]
			],
			/* parameters */ UDF,
			[/* throws */
				[/* throw */ 'java.lang.TypeNotPresentException', [/* throw description */
					[/* text */ 't', `if any of the actual type arguments
     refers to a non-existent class or interface declaration`]
				]],
				[/* throw */ 'java.lang.reflect.MalformedParameterizedTypeException', [/* throw description */
					[/* text */ 't', `if any of the
     actual type parameters refer to a parameterized type that cannot
     be instantiated for any reason`]
				]]
			],
			[/* return description */
				[/* text */ 't', `an array of `],
				[/* inline code block */ 'i', `Type`],
				[/* text */ 't', ` objects representing the actual type
     arguments to this type`]
			]
		]]
	],
]);
