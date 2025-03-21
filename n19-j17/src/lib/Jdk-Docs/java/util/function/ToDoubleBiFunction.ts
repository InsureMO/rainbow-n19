import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.ToDoubleBiFunction', [
	[/* class description */
		[/* text */ 't', `Represents a function that accepts two arguments and produces a double-valued
 result.  This is the `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-producing primitive specialization for
 `],
		[/* reference */ 'r', `java.util.function.BiFunction`, `BiFunction`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#applyAsDouble(T,U)`, `applyAsDouble(Object, Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'applyAsDouble(java.lang.Object,java.lang.Object)', [
			[/* method description */
				[/* text */ 't', `Applies this function to the given arguments.`]
			],
			[/* parameters */
				[/* parameter */ 't', [/* parameter description */
					[/* text */ 't', `the first function argument`]
				]],
				[/* parameter */ 'u', [/* parameter description */
					[/* text */ 't', `the second function argument`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* text */ 't', `the function result`]
			]
		]]
	],
	/* enum values */ UDF
]);
