import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.DoubleSupplier', [
	[/* class description */
		[/* text */ 't', `Represents a supplier of `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-valued results.  This is the
 `],
		[/* inline code block */ 'i', `double`],
		[/* text */ 't', `-producing primitive specialization of `],
		[/* reference */ 'r', `java.util.function.Supplier`, `Supplier`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `There is no requirement that a distinct result be returned each
 time the supplier is invoked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#getAsDouble()`, `getAsDouble()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'getAsDouble()', [
			[/* method description */
				[/* text */ 't', `Gets a result.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `a result`]
			]
		]]
	],
	/* enum values */ UDF
]);
