import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedParameterizedType', [
	[/* class description */
		[/* inline code block */ 'i', `AnnotatedParameterizedType`],
		[/* text */ 't', ` represents the potentially annotated use
 of a parameterized type, whose type arguments may themselves represent
 annotated uses of types.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAnnotatedOwnerType()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated type that this type is a member of, if
 this type represents a nested type. For example, if this type is
 `],
				[/* inline code block */ 'i', `@TA O<T>.I<S>`],
				[/* text */ 't', `, return a representation of `],
				[/* inline code block */ 'i', `@TA O<T>`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` if this `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` represents a
     top-level class or interface, or a local or anonymous class, or
     a primitive type, or void.`]
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
				[/* text */ 't', `an `],
				[/* inline code block */ 'i', `AnnotatedType`],
				[/* text */ 't', ` object representing the potentially
     annotated type that this type is a member of, or `],
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getAnnotatedActualTypeArguments()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated actual type arguments of this parameterized type.

 `],
				[/* block */ 'b', `Note that in some cases, the returned array can be empty. This can occur
 if this annotated type represents a non-parameterized type nested within
 a parameterized type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the potentially annotated actual type arguments of this parameterized type`]
			]
		]]
	],
]);
