import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.util.function.Supplier', [
	[/* class description */
		[/* text */ 't', `Represents a supplier of results.

 `],
		[/* block */ 'b', `There is no requirement that a new or distinct result be returned each
 time the supplier is invoked.

 `],
		[/* block */ 'b', [
			[/* text */ 't', `This is a `],
			[/* external link */ 'a', `package-summary.html`, `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `get()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */ UDF,
	/* constructors */ UDF,
	[/* methods */
		[/* method */ 'get()', [
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
