import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedTypeVariable', [
	[/* class description */
		[/* inline code block */ 'i', `AnnotatedTypeVariable`],
		[/* text */ 't', ` represents the potentially annotated use of a
 type variable, whose declaration may have bounds which themselves represent
 annotated uses of types.`]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAnnotatedBounds()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated bounds of this type variable.
 If no bound is explicitly declared, the bound is unannotated
 `],
				[/* inline code block */ 'i', `Object`],
				[/* text */ 't', `.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the potentially annotated bounds of this type variable`]
			]
		]],
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
					[/* text */ 't', ` for an `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` that is an instance
     of `],
					[/* inline code block */ 'i', `AnnotatedTypeVariable`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* inline code block */ 'i', `null`]
			]
		]]
	],
]);
