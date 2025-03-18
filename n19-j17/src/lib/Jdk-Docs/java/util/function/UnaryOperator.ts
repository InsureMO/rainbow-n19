import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.UnaryOperator', [
	[/* class description */
		[/* text */ 't', `Represents an operation on a single operand that produces a result of the
 same type as its operand.  This is a specialization of `],
		[/* inline code block */ 'i', `Function`],
		[/* text */ 't', ` for
 the case where the operand and result are of the same type.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `java.util.function.Function#apply(T)`, `Function.apply(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'identity()', [
			[/* method description */
				[/* text */ 't', `Returns a unary operator that always returns its input argument.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a unary operator that always returns its input argument`]
			]
		]]
	],
	/* enum values */ UDF
]);
