import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.reflect.AnnotatedWildcardType', [
	[/* class description */
		[/* inline code block */ 'i', `AnnotatedWildcardType`],
		[/* text */ 't', ` represents the potentially annotated use of a
 wildcard type argument, whose upper or lower bounds may themselves represent
 annotated uses of types.`]
	],
	/* fields */,
	/* constructors */,
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
					[/* text */ 't', ` for an `],
					[/* inline code block */ 'i', `AnnotatedType`],
					[/* text */ 't', ` that is an instance
     of `],
					[/* inline code block */ 'i', `AnnotatedWildcardType`],
					[/* text */ 't', `.`]
				]]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `null`]
			]
		]],
		[/* method */ 'getAnnotatedLowerBounds()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated lower bounds of this wildcard type.
 If no lower bound is explicitly declared, the lower bound is the
 type of null. In this case, a zero length array is returned.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the potentially annotated lower bounds of this wildcard type or
 an empty array if no lower bound is explicitly declared.`]
			]
		]],
		[/* method */ 'getAnnotatedUpperBounds()', [
			[/* method description */
				[/* text */ 't', `Returns the potentially annotated upper bounds of this wildcard type.
 If no upper bound is explicitly declared, the upper bound is
 unannotated `],
				[/* inline code block */ 'i', `Object`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the potentially annotated upper bounds of this wildcard type`]
			]
		]]
	],
	/* enum values */ UDF
]);
