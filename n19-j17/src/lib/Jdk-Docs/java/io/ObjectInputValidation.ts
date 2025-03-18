import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.ObjectInputValidation', [
	[/* class description */
		[/* text */ 't', `Callback interface to allow validation of objects within a graph.
 Allows an object to be called when a complete graph of objects has
 been deserialized.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'validateObject()', [
			[/* method description */
				[/* text */ 't', `Validates the object.`]
			],
			/* parameters */,
			[/* throws */
				[/* throw */ 'java.io.InvalidObjectException', [/* throw description */
					[/* text */ 't', `If the object cannot validate itself.`]
				]]
			],
			/* return */ UDF
		]]
	],
	/* enum values */ UDF
]);
