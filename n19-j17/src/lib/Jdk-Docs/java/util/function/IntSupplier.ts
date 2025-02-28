import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.IntSupplier', [
	[/* class description */
		[/* text */ 't', `Represents a supplier of `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-valued results.  This is the
 `],
		[/* inline code block */ 'i', `int`],
		[/* text */ 't', `-producing primitive specialization of `],
		[/* reference */ 'r', `java.util.function.Supplier`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `There is no requirement that a distinct result be returned each
 time the supplier is invoked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `getAsInt()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAsInt()', [
			[/* method description */
				[/* text */ 't', `Gets a result.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `a result`]
			]
		]]
	],
]);
