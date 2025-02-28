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
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* external link */ 'a', `Function.html#apply(T)`, `Function.apply(Object)`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'identity()', [
			[/* method description */
				[/* text */ 't', `Returns a unary operator that always returns its input argument.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a unary operator that always returns its input argument`]
			]
		]]
	],
]);
