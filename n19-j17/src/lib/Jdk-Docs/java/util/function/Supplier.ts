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
			[/* text */ 't', `functional interface`],
			[/* text */ 't', `
 whose functional method is `],
			[/* reference */ 'r', `#get()`, `get()`],
			[/* text */ 't', `.`]
		]]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'get()', [
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
