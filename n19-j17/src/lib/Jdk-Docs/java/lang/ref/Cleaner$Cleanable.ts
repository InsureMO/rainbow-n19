import {UDF} from '../../../../utils';
import {DocsCollector} from '../../../DocsCollector';

DocsCollector.collect('java.lang.ref.Cleaner$Cleanable', [
	[/* class description */
		[/* inline code block */ 'i', `Cleanable`],
		[/* text */ 't', ` represents an object and a
 cleaning action registered in a `],
		[/* inline code block */ 'i', `Cleaner`],
		[/* text */ 't', `.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'clean()', [
			[/* method description */
				[/* text */ 't', `Unregisters the cleanable and invokes the cleaning action.
 The cleanable's cleaning action is invoked at most once
 regardless of the number of calls to `],
				[/* inline code block */ 'i', `clean`],
				[/* text */ 't', `.`]
			],
			/* parameters */,
			/* throws */,
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
