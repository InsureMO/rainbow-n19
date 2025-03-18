import {UDF} from '../../../../../utils';
import {DocsCollector} from '../../../../DocsCollector';

DocsCollector.collect('java.nio.file.attribute.AttributeView', [
	[/* class description */
		[/* text */ 't', `An object that provides a read-only or updatable `],
		[/* text */ 't', `view`],
		[/* text */ 't', ` of non-opaque
 values associated with an object in a filesystem. This interface is extended
 or implemented by specific attribute views that define the attributes
 supported by the view. A specific attribute view will typically define
 type-safe methods to read or update the attributes that it supports.`]
	],
	/* fields */,
	/* constructors */,
	[/* methods */
		[/* method */ 'name()', [
			[/* method description */
				[/* text */ 't', `Returns the name of the attribute view.`]
			],
			/* parameters */,
			/* throws */,
			[/* return description */
				[/* text */ 't', `the name of the attribute view`]
			]
		]]
	],
	/* enum values */ UDF
]);
