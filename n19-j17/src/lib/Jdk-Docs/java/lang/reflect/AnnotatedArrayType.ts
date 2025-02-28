import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedArrayType', [
	[/* class description */
		[/* inline code block */ 'i', `AnnotatedArrayType`],
		[/* text */ 't', ` represents the potentially annotated use of an
 array type, whose component type may itself represent the annotated use of a
 type.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAnnotatedOwnerType()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated type that this type is a member of, if
 this type represents a nested class or interface. For example, if this
 type is `],
				[/* inline code block */ 'i', `@TA O<T>.I<S>`],
				[/* text */ 't', `, return a representation of `],
				[/* inline code block */ 'i', `@TA O<T>`],
				[/* text */ 't', `.

 `],
				[/* block */ 'b', [
					[/* text */ 't', `Returns `],
					[/* inline code block */ 'i', `null`],
					[/* text */ 't', ` for an `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` that is an instance
     of `],
					[/* inline code block */ 'i', `AnnotatedArrayType`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getAnnotatedGenericComponentType()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated generic component type of this array type.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the potentially annotated generic component type of this array type`]
			]
		]]
	],
]);
