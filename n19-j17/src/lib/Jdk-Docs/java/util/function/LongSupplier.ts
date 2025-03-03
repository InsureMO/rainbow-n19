import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.LongSupplier', [
	[/* class description */
		[/* text */ 't', `Represents a supplier of `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-valued results.  This is the
 `],
		[/* inline code block */ 'i', `long`],
		[/* text */ 't', `-producing primitive specialization of `],
		[/* reference */ 'r', `java.util.function.Supplier`],
		[/* text */ 't', `.

 `],
		[/* block */ 'b', `There is no requirement that a distinct result be returned each
 time the supplier is invoked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* reference */ 'r', `.package-summary`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#getAsLong()`, `getAsLong()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'getAsLong()', [
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
