import {UDF} from '../../../utils';
import {DocsCollector} from '../../DocsCollector';

DocsCollector.collect('java.util.MissingResourceException', [
	[/* class description */
		[/* text */ 't', `Signals that a resource is missing.`]
	],
	/* fields */ UDF,
	[/* constructors */
		[/* constructor */ '<init>(java.lang.String,java.lang.String,java.lang.String)', [
			[/* constructor description */
				[/* text */ 't', `Constructs a MissingResourceException with the specified information.
 A detail message is a String that describes this particular exception.`]
			],
			[/* parameters */
				[/* parameter */ 's', [/* parameter description */
					[/* text */ 't', `the detail message`]
				]],
				[/* parameter */ 'className', [/* parameter description */
					[/* text */ 't', `the name of the resource class`]
				]],
				[/* parameter */ 'key', [/* parameter description */
					[/* text */ 't', `the key for the missing resource.`]
				]]
			],
			/* throws */ UDF
		]]
	],
	[/* methods */
		[/* method */ 'getKey()', [
			[/* method description */
				[/* text */ 't', `Gets parameter passed by constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the key for the missing resource`]
			]
		]],
		[/* method */ 'getClassName()', [
			[/* method description */
				[/* text */ 't', `Gets parameter passed by constructor.`]
			],
			/* parameters */ UDF,
			/* throws */ UDF,
			[/* return description */
				[/* text */ 't', `the name of the resource class`]
			]
		]]
	],
]);
