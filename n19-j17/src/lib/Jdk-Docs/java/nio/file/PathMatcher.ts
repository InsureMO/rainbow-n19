import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.nio.file.PathMatcher', [
	[/* class description */
		[/* text */ 't', `An interface that is implemented by objects that perform match operations on
 paths.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'matches(java.nio.file.Path)', [
			[/* method description */
				[/* text */ 't', `Tells if given path matches this matcher's pattern.`]
			],
			[/* parameters */
				[/* parameter */ 'path', [/* parameter description */
					[/* text */ 't', `the path to match`]
				]]
			],
			/* throws */,
			[/* return description */
				[/* inline code block */ 'i', `true`],
				[/* text */ 't', ` if, and only if, the path matches this
          matcher's pattern`]
			]
		]]
	],
	/* enum values */ UDF
]);
