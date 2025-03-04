import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.io.NotSerializableException', [
	[/* class description */
		[/* text */ 't', `Thrown when an instance is required to have a Serializable interface.
 The serialization runtime or the class of the instance can throw
 this exception. The argument should be the name of the class.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>()', [
			[/* constructor description */
				[/* text */ 't', `Constructs a NotSerializableException object.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF
		]],
		[/* constructor */ '<init>(java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a NotSerializableException object with message string.`]
			],
			[/* parameters */
				[/* parameter */ 'classname', [/* parameter description */
					[/* text */ 't', `Class of the instance being serialized/deserialized.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	/* methods */ UDF,
]);
